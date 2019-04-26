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
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

const PostContentWrapper = styled.div`
  display: flex;
  padding-left: 3rem;
  padding-bottom: 2rem;
`;

const PostWrapper = styled.div`
  border: 1px solid black;
  margin: 3rem;
  background: white;
  /* box-shadow: 5px 5px 10px black; */
  /* box-shadow: 3px 3px 5px 6px darkgrey; */
  box-shadow: 0 15px 30px 0 #2C3539,
              0 5px 15px 0 #2C3539;

`;

const MainPostWrapper = styled.div`
  border-bottom: 1px solid black;
`;

const ReplyWrapper = styled.div`
  padding-left: 2rem;
  padding-top: 2rem;
  background: #dad;
  border-bottom: 1px solid black;
`;

function Post(props) {
  const { classes } = props;
  const [quillRef, setQuillRef] = useState(null);
  const [reactQuillRef, setReactQuillRef] = useState({});
  const [post, setPost] = useState([]);
  const [quillValue, setQuillValue] = useState("");
  const [showQuill, setShowQuill] = useState(false);

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
    setPost(res.data);
  };

  const handleQuillChange = html => {
    console.log(html);
    setQuillValue(html);
  };

  const handleShowQuill = () => {
    setShowQuill(!showQuill);
    setQuillValue(post.content);
  };

  // const updatePost = async () => {
  //   console.log(quillValue);
  //   let updatedPost = {
  //     content: post.content,
  //     post_id: post.post_id
  //   };
  //   try {
  //     await axios.put("/api/post", updatedPost);
  //     getPost();
  //     handleShowQuillValue();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const deleteReply = async post_id => {
    console.log(post_id);
    try {
      await axios.delete(`/api/reply/${post_id}`);
      getPost();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async post => {
    console.log(post);
    try {
      await axios.delete(`/api/post/${post.post_id}`);
      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const createReply = async () => {
    let reply = {
      content: quillValue,
      user_id: props.user_id,
      parent_id: props.match.params.id
    };
    try {
      await axios.post("/api/reply", reply);
      setShowQuill(!showQuill);
      setQuillValue("");
    } catch (err) {
      console.log(err);
      // alert("Please fill out the required fields");
    }
  };

  const parentPost = post
    .filter(post => !post.parent_id)
    .map(post => {
      return (
        <div key={post.post_id}>
          <MainPostWrapper>
            <h2>{post.title}</h2>
            <PostInfoWrapper>
              <img
                src={post.picture}
                alt="userimg"
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "50%",
                  margin: "10px"
                }}
              />
              <p>
                {post.username} posted on {post.date}
              </p>
              {post.user_id === props.user_id ? (
                <div>
                  <button onClick={() => deletePost(post)}>Delete</button>
                </div>
              ) : null}
            </PostInfoWrapper>
            <PostContentWrapper>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                }}
                className="post-content"
                style={{ textAlign: "left", paddingRight: "2rem" }}
              />
            </PostContentWrapper>
          </MainPostWrapper>
        </div>
      );
    });

  const postReplies = post
    .filter(post => post.parent_id)
    .map(post => {
      return (
        <div key={post.post_id}>
          <ReplyWrapper>
            <PostInfoWrapper>
              <img
                src={post.picture}
                alt="userimg"
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "50%",
                  margin: "10px"
                }}
              />
              <p>
                {post.username} posted on {post.date}
              </p>
              {post.user_id === props.user_id ? (
                <div>
                  <button
                    onClick={() => {
                      deleteReply(post.post_id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </PostInfoWrapper>
            <PostContentWrapper>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                }}
                className="post-content"
                style={{ textAlign: "left", paddingRight: "2rem" }}
              />
            </PostContentWrapper>
          </ReplyWrapper>
        </div>
      );
    });
  console.log(post);
  return (
    <PostWrapper>
      {parentPost}
      {postReplies}
      <div className="create-reply-wrapper">
        <img
          className="user-img"
          src={props.profile_pic}
          alt=""
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            margin: "10px"
          }}
        />
        <div>
          <div>
            {showQuill ? (
              <div>
                <ReactQuill
                  ref={el => {
                    setQuillRef(el);
                  }}
                  theme={"snow"}
                  onChange={html => handleQuillChange(html)}
                  modules={Editor.modules}
                  formats={Editor.formats}
                  defaultValue={quillValue || ""}
                  value={quillValue || ""}
                  placeholder="Write your reply here..."
                  className="quillbox-reply"
                />
                <button style={{ marginBottom: "10px" }} onClick={createReply}>
                  Submit
                </button>
              </div>
            ) : (
              <div
                className="reply-quill"
                onClick={() => handleShowQuill()} /*ON CLICK TO OPEN A QUILL*/
              >
                <p>Reply to this topic...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PostWrapper>
  );
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id,
    profile_pic: reduxState.picture
  };
};

export default connect(mapStateToProps)(Post);
