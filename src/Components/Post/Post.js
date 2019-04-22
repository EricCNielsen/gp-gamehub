import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import styled from "styled-components";

const Editor = {};
Editor.modules = {};
Editor.modules.toolbar = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"], // blocks
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }], // lists
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
  [{ color: [] }, { background: [] }], // dropdown with defaults
  [{ font: [] }], // font family
  [{ align: [] }], // text align
  ["clean"] // remove formatting
];

Editor.formats = [
  "header",
  "font",
  "background",
  "color",
  "code",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "script",
  "align",
  "direction",
  "link",
  "image",
  "code-block",
  "formula",
  "video"
];

const PostInfoWrapper = styled.div`
  background: violet;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const PostContentWrapper = styled.div`
  background: blue;
  display: flex;
`;

function Post(props) {
  const { classes } = props;
  const [quillRef, setQuillRef] = useState(null);
  const [reactQuillRef, setReactQuillRef] = useState({});
  const [post, setPost] = useState({});
  const [replies, setReplies] = useState({});
  const [postQuillValue, setPostQuillValue] = useState("");
  const [showPostQuill, setShowPostQuill] = useState(false);

  useEffect(() => {
    attachQuillRefs();
    getPost();
  }, []);

  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== "function") return;
    if (quillRef != null) return;
    const copyOfQuillRef = reactQuillRef.getEditor();
    if (quillRef != null) setQuillRef(copyOfQuillRef);
  };

  const getPost = async () => {
    let res = await axios.get(`/api/post/${props.match.params.id}`);
    console.log(res.data);
    setPost(res.data);
  };

  const getReplies = async () => {
    let res = await axios.get(`/api/postreplies`);
    console.log(res.data);
    setReplies(res.data);
  };

  const handlePostQuillChange = html => {
    setPostQuillValue(html);
  };

  const handleShowPostQuillValue = () => {
    setShowPostQuill(!showPostQuill);
    setPostQuillValue(post.content);
  };

  const updatePost = async () => {
    console.log(postQuillValue);
    let updatedPost = {
      content: postQuillValue,
      post_id: post.post_id
    };
    try {
      await axios.put("/api/post", updatedPost);
      getPost();
      handleShowPostQuillValue();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async () => {
    let id = post.post_id;
    try {
      await axios.delete(`/api/post/${id}`);
      this.props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <PostInfoWrapper>
        <h2>{post.title}</h2>
        <img
          src={post.picture}
          alt="userimg"
          style={{ height: "60px", width: "60px", borderRadius: "50%" }}
        />
        <p>
          {post.username} posted on {post.date}
        </p>
      </PostInfoWrapper>
      <PostContentWrapper>
        <div className="edit-delete-butts">
          {showPostQuill ? (
            <React.Fragment>
              <button onClick={() => updatePost()}>Save</button>
              <button onClick={() => deletePost()}>Delete</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {" "}
              {post.user_id === props.user_id ? (
                <button onClick={handleShowPostQuillValue}>Edit</button>
              ) : null}{" "}
            </React.Fragment>
          )}
        </div>
        <div>
          {showPostQuill ? (
            <ReactQuill
              ref={el => {
                setReactQuillRef(el);
              }}
              theme={"snow"}
              onChange={html => handlePostQuillChange(html)}
              modules={Editor.modules}
              formats={Editor.formats}
              defaultValue={postQuillValue}
              value={postQuillValue}
              placeholder="Write your post here..."
              className="quillbox-reply"
            />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
              }}
              className="post-content"
            />
          )}
        </div>
      </PostContentWrapper>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id
  };
};

export default connect(mapStateToProps)(Post);
