import React, { Component } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";

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

function Post(props) {
  const { classes } = props;
  const [quillRef, setQuillRef] = useState(null);
  const [reactQuillRef, setReactQuillRef] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    attachQuillRefs();
  });

  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== "function") return;
    if (quillRef != null) return;
    const copyOfQuillRef = reactQuillRef.getEditor();
    if (quillRef != null) setQuillRef(quillRef);
  };
}
