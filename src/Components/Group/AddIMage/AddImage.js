import React, { useState } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";

export default function AddImage(props) {
  const [uploading, setUploading] = useState(false),
    [url, setUrl] = useState("");

  const uploadFile = async (file, signedRequest, url) => {
    try {
      const options = {
        headers: {
          "content-type": file.type
        }
      };
      await axios.put(signedRequest, file, options);
      setUploading(false);
      setUrl(url);
      props.setPostImage(url);
    } catch (err) {
      console.log(`There was an error uploading file:${err}`);
    }
  };
  const getSignedRequest = async ([file]) => {
    try {
      setUploading({ isUploading: true });
      const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`,
        signS3 = await axios.get("/api/signs3", {
          params: {
            "file-name": fileName,
            "file-type": file.type
          }
        });
      console.log(signS3);
      const { signedRequest, url } = signS3.data;
      uploadFile(file, signedRequest, url);
    } catch (err) {
      console.log(`There was an error signing up with S3:${err}`);
    }
  };

  return (
    <div>
      {url ? (
        <img
          style={{ width: "6em", height: "6em" }}
          src={url}
          alt="clan-post"
        />
      ) : (
        <Dropzone
          style={{ postion: "inherit", margin: "1rem 0" }}
          className="dropzone"
          onDropAccepted={getSignedRequest}
          accept="image/*"
          multiple={false}
        >
          {uploading ? (
            <GridLoader />
          ) : (
            <p>Drop File here or Click to upload</p>
          )}
        </Dropzone>
      )}
    </div>
  );
}
