import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import styled from "styled-components";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     background: "transparent",
//     // Overwrittes the different states of border
//     borderColor: state.isFocused ? "blue" : "grey",
//     // Removes weird border around container
//     boxShadow: state.isFocused ? null : null,
//     "&:hover": {
//       // Overwrittes the different states of border
//       borderColor: state.isFocused ? "blue" : "blue"
//     }
//   })
// };

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
  height: 100vh,
  width: 100%,
  background: blue;
`;

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      picture: "",
      date: "",
      imageToUpload: null,
      isUploading: false,
      url: "",
      important: false
    };

    this.quillRef = null;
    this.reactQuillRef = null;
  }

  componentDidMount() {
    this.attachQuillRefs();
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== "function") return;
    if (this.quillRef != null) return;
    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  create = async () => {
    let post = {
      title: this.state.title,
      content: this.state.content,
      photo: this.state.url
    };
    console.log(post);
    try {
      await axios.post("/api/post", post);
    } catch (err) {
      alert("Please fill out the required feilds");
    }
  };

  //S3 stuff

  // getSignedRequest = ([file]) => {
  //   this.setState({ isUploading: true });
  //   // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
  //   const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

  //   // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
  //   axios
  //     .get("/api/signs3", {
  //       params: {
  //         "file-name": fileName,
  //         "file-type": file.type
  //       }
  //     })
  //     .then(response => {
  //       const { signedRequest, url } = response.data;
  //       this.uploadFile(file, signedRequest, url);
  //       this.setState({
  //         url
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // uploadFile = (file, signedRequest, url) => {
  //   const options = {
  //     headers: {
  //       "Content-Type": file.type
  //     }
  //   };

  //   axios
  //     .put(signedRequest, file, options)
  //     .then(response => {
  //       console.log(response);
  //       // let picUrl = response.config.url
  //       // picUrl = picUrl.substring(0,picUrl.indexOf('?'))
  //       this.setState({ isUploading: false, picture: url });
  //       console.log(url);
  //     })
  //     .catch(err => {
  //       this.setState({
  //         isUploading: false
  //       });
  //       if (err.response.status === 403) {
  //         alert(
  //           `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
  //             err.stack
  //           }`
  //         );
  //       } else {
  //         alert(`ERROR: ${err.status}\n ${err.stack}`);
  //       }
  //     });
  // };

  render() {
    const { classes } = this.props;
    const { url, isUploading } = this.state;
    return (
      <BodyWrapper>
        <div>
          <TextField
            id="outlined-name"
            label="Title"
            className={classes.textField}
            value={this.state.name}
            // onChange={this.handleChange("title")}
            margin="normal"
            variant="outlined"
          />
          <ReactQuill
            ref={el => {
              this.reactQuillRef = el;
            }}
            theme={"snow"}
            onChange={this.handleQuillChange}
            modules={Editor.modules}
            formats={Editor.formats}
            defaultValue={this.state.content}
            value={this.state.content}
            placeholder="Testing Grounds"
            className="quillbox"
          />
        </div>
        <Dropzone
          onDropAccepted={this.getSignedRequest}
          style={{
            position: "relative",
            width: 150,
            height: 100,
            borderWidth: 2,
            // marginTop: 100,
            borderColor: "rgb(102, 102, 102)",
            borderStyle: "dashed",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 15
          }}
          accept="image/*"
          multiple={false}
        >
          {isUploading ? (
            <GridLoader />
          ) : (
            <div>Drop File or Click Here to add photos</div>
          )}
        </Dropzone>
      </BodyWrapper>
    );
  }
}

export default withStyles(styles)(Post);
