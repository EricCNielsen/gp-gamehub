import React, { useState, useEffect } from "react";
import "./group.css";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import { updateClan } from "../../ducks/reducer";
import { connect } from "react-redux";
import { getType } from "mime";
import InGroupMini from "./InGroupMini";

const Group = props => {
  const [url, setUrl] = useState(""),
    [isUploading, setUploading] = useState(""),
    [name, setName] = useState(""),
    [edit, setEdit] = useState(false),
    [bio, setBio] = useState("");

  useEffect(() => {
    getClan();
  }, []
  );

  const getClan = () => {
    const { id } = props.match.params;
    if (id) {
      axios.get(`/api/clan/${id}`).then(res => {
        console.log("hello in getClan", typeof res.data[0]);
        setName(res.data[0].name);
        setBio(res.data[0].bio);
        setUrl(res.data[0].avatar);
        props.updateClan(res.data[0]);
      });
    } else {
      const {clanName, clanBio, clanAvatar} = props
      setName(clanName);
      setBio(clanBio);
      setUrl(clanAvatar);
    }
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
      clan_id: props.clan_id ,
      url,
      bio,
      name
    };
    try {
      let res = await axios.put("/api/clan", clan);
      console.log("handleSave", res.data);
      props.updateClan(res.data);
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  let handleEdit = async () => {
    setEdit(!edit);
    setName(name);
    setBio(bio);
    setUrl(url);
  };

  console.log(props.clan_id)

  if (props.user_id) {
  return (
    <div className="clan">
      <div className="clanInfo">
        {edit ? (
          <>
            <img className="logo" src={url} alt="logo" />

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
                  {isUploading ? (
                    <GridLoader />
                  ) : (
                    <p>Drop File or Click Here</p>
                  )}
                </Dropzone>
              </div>
            )}
            <br />
            <input
              id="name"
              placeholder="Clan Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              id="bio"
              placeholder="Bio Here"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <img className="logo" src={url} alt="logo" />
            <h1>{name}</h1>
            <h4>About the Clan:</h4> {bio}
            {props.user_id === props.owner_id ? (
            <button onClick={handleEdit}>Edit</button>
            ) : null}
          </>
        )}
      </div>
      <div className="feed">
        <h1>Posts Go Here</h1>
      </div>
      <InGroupMini clan_id={props.clan_id}/>
    </div>
    );
  } else {
    return <></>;
  }
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
)(Group);
