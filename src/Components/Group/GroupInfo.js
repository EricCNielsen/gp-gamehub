import React, { useState, useEffect } from "react";
import "./group.css";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import { updateClan } from "../../ducks/reducer";
import { connect } from "react-redux";
const GroupInfo = ({ clan, user_id, props }) => {
  const [url, setUrl] = useState(""),
    [isUploading, setUploading] = useState(""),
    [name, setName] = useState(""),
    [edit, setEdit] = useState(false),
    [bio, setBio] = useState(""),
    [clanState, setClanState] = useState([]);



  let handleEdit = () => {
    setEdit(!edit);
    setName(!name ? props.clanName : name);
    setBio(!bio ? props.clanBio : bio);
    setUrl(url ? url : props.clanAvatar);
  };
  let getSignedRequest = ([file]) => {
    setUploading({ isUploading: true });
    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;
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
      .then(() => {
        setUploading(false);
        setUrl(url);
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
  let handleSave = async () => {
    let clan = {
      clan_id: props.clan_id,
      url: url
        ? url
        : "http://newsite.jmwc.org/wp-content/uploads/2016/05/group-placeholder.png",
      bio,
      name
    };
    console.log("testing save", clan);
    try {
      let res = await axios.put("/api/clan", clan);
      console.log("handleSave", res.data);
      props.updateClan(res.data);
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  if(!props.clanName){
    return <div className="clanInfo">I am Loading mother Effer</div>
  }
  return (
    <div className="clanInfo">
      {edit ? (
        <>
          <img className="logo" src={url ? url : props.clanAvatar} alt="logo" />
          {url ? (
            <button onClick={() => setUrl("")}>edit</button>
          ) : (
            <div className="dropzone">
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
          <br />
          <input
            id="name"
            placeholder={props.clanName ? props.clanName : "Clan Name"}
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e =>
              (e.target.placeholder = props.clanName
                ? props.clanName
                : "Clan Name")
            }
            value={!name ? props.clanName : name}
            onChange={e => setName(e.target.value)}
            style={{ textAlign: "center" }}
          />
          <textarea
            id="bio"
            placeholder={props.clanBio ? props.clanBio : "Clan Bio"}
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e =>
              (e.target.placeholder = props.clanBio
                ? props.clanBio
                : "Clan Bio")
            }
            value={bio}
            onChange={e => setBio(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <img
            className="logo"
            src={props.clanAvatar}
            style={{ borderRadius: "100%" }}
            alt="logo"
          />
          <h1>{props.clanName}</h1>
          <p id="bio">{props.clanBio}</p>
          {props.user_id === props.owner_id ? (
            <button onClick={handleEdit}>Edit</button>
          ) : null}
        </>
      )}
    </div>
  );
};

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id,
    clan_id: reduxState.clan_id,
    owner_id: reduxState.owner_id,
    clanBio: reduxState.clanBio,
    clanAvatar: reduxState.clanAvatar,
    clanName: reduxState.clanName
  };
};
export default connect(
  mapStateToProps,
  { updateClan }
)(GroupInfo);
