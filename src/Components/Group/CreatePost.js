import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import AddImage from "./AddIMage/AddImage";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

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

const BodyWrapper = styled.div`
  padding: 2rem;
`;

// const propTypes = {
//   initial: PropTypes.bool,
//   onToggle: PropTypes.func.isRequired,
//   width: PropTypes.number.isRequired,
//   padding: PropTypes.number.isRequired,
//   ballColor: PropTypes.string.isRequired,
//   ballColorActive: PropTypes.string.isRequired,
//   bgToggled: PropTypes.string.isRequired,
//   borderColor: PropTypes.string.isRequired
// };

function CreatePost(props) {
  const { classes } = props;
  const [quillRef, setQuillRef] = useState(null);
  const [reactQuillRef, setReactQuillRef] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  // const [user_id, setUserId] = useState(0);

  // constructor() {
  //   super();
  //   this.state = {
  //     title: "",
  //     content: "",
  //     picture: "",
  //     important: false
  //   };

  useEffect(() => {
    attachQuillRefs();
  }, []);

  function setPostImage(url) {
    setPicture(url);
  }

  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== "function") return;
    if (quillRef != null) return;
    const copyOfQuillRef = reactQuillRef.getEditor();
    if (quillRef != null) setQuillRef(quillRef);
  };

  const create = async () => {
    let post = {
      title,
      content,
      picture,
      user_id: props.user_id,
      clan_id: props.clan_id
    };
    try {
      const newPost = await axios.post("/api/post", post);
      props.handleClose();
    } catch (err) {
      console.log(err);
      alert("Please fill out the required fields");
    }
  };

  return (
    <BodyWrapper>
      <div>
        <TextField
          id="outlined-name"
          label="Title"
          className={styles.textField}
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          margin="normal"
          variant="outlined"
        />
        <ReactQuill
          ref={el => {
            setReactQuillRef(el);
          }}
          theme={"snow"}
          onChange={html => {
            setContent(html);
          }}
          modules={Editor.modules}
          formats={Editor.formats}
          defaultValue={content}
          value={content}
          placeholder="Testing Grounds"
          className="quillbox"
        />
      </div>
      <AddImage
        setPostImage={setPostImage}
        style={{ position: "relative", left: "0" }}
      />
      <Button onClick={props.handleClose} color="primary">
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={create}
        className={styles.button}
      >
        Send
        <Icon className={styles.rightIcon}>send</Icon>
      </Button>
    </BodyWrapper>
  );
}

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user_id,
    clan_id: reduxState.clan_id
  };
}

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(CreatePost))
);
