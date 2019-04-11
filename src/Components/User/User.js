import React, { useState } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import "./user.css";

function User() {
  const [isUploading, setUploading] = useState(false),
    [url, setUrl] = useState(url),
    [experience, setExperience] = useState('beginner');

  let getSignedRequest = ([file]) => {
    setUploading({ isUploading: true });
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios
      .get("/api/signs3", {
        params: {
          "file-name": fileName,
          "file-type": file.type
        }
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };

    axios
      .put(signedRequest, file, options)
      .then(response => {
        setUploading(false);
        setUrl(url);
        // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
      })
      .catch(err => {
        setUploading({
          isUploading: false
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };

  return (
    <>
      <h1>Avatar</h1>
      <img src={url} alt="profile img" />

      {url ? (
        <button onClick={() => setUrl("")}>edit</button>
      ) : (
        <div
          className="dropzone"
        >
          <Dropzone
            className="dropzone"
            onDropAccepted={getSignedRequest}
            accept="image/*"
            multiple={false}
          >
            {isUploading ? <GridLoader /> : <p>Drop File or Click Here</p>}
          </Dropzone>
        </div>
      )}
      <input placeholder="Bio Here" />
      <select value={experience}
      onChange={e => setExperience(e.target.value)}>
        <option value='beginner'>beginner</option>
        <option value='intermediate'>intermediate</option>
        <option value='expert'>expert</option>
      </select>
    </>
  );
}

export default User;
