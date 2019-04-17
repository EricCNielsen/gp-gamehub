import React, { useState, useEffect } from "react"
import axios from "axios"
import { v4 as randomString } from "uuid"
import Dropzone from "react-dropzone"
import { GridLoader } from "react-spinners"
import "./user.css"
import { updateUser } from "../../ducks/reducer"
import { connect } from "react-redux"

function User(props) {
  const [isUploading, setUploading] = useState(false),
    [url, setUrl] = useState(""),
    [edit, setEdit] = useState(false),
    [exp, setExp] = useState(""),
    [picture, setPicture] = useState(""),
    [username, setUsername] = useState(""),
    // [email, setEmail] = useState(props.email),
    [location, setLocation] = useState(""),
    [bio, setBio] = useState("")

  useEffect(() => {
    getUser()
  }, [props.match.params.id])

  const getUser = () => {
    console.log(123123, props)
    const { id } = props.match.params
    if (id) {
      axios.get(`/api/user/${id}`).then(res => {
        setPicture(res.data[0].picture)
        setUsername(res.data[0].username)
        setLocation(res.data[0].location)
        setExp(res.data[0].exp)
        setBio(res.data[0].bio)
        console.log(res)
      })
    } else {
      const { picture, username, location, exp, bio } = props
      setPicture(picture)
      setUsername(username)
      setLocation(location)
      setExp(exp)
      setBio(bio)
    }
  }

  let getSignedRequest = ([file]) => {
    setUploading({ isUploading: true })
    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`
    axios
      .get("/api/signs3", {
        params: {
          "file-name": fileName,
          "file-type": file.type
        }
      })
      .then(response => {
        const { signedRequest, url } = response.data
        uploadFile(file, signedRequest, url)
      })
      .catch(err => {
        console.log(err)
      })
  }

  let uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    }

    axios
      .put(signedRequest, file, options)
      .then(() => {
        setUploading(false)
        setUrl(url)
      })
      .catch(err => {
        setUploading({
          isUploading: false
        })
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          )
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`)
        }
      })
  }

  let handleSave = async () => {
    let user = {
      user_id: props.user_id,
      picture: url,
      bio,
      location,
      username,
      exp
    }
    try {
      let res = await axios.put("/api/user", user)
      props.updateUser(res.data[0])
      setEdit(false)
    } catch (err) {
      console.log(err)
    }
  }

  let handleEdit = async () => {
    setEdit(!edit)
    setUsername(props.username)
    setLocation(props.location)
    setBio(props.bio)
    setUrl(props.picture)
    setExp(props.exp)
  }

  if (props.user_id) {
    return (
      <>
        {edit ? (
          <>
            <img className="profileimg" src={url} alt="profile img" />

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
            {/* <input id='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/> */}
            <input
              id="username"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              id="location"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />

            <select value={exp} onChange={e => setExp(e.target.value)}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
            <br />
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
            <img className="profileimg" src={picture} alt="profile img" />
            <h4>Username:</h4> {username}
            <h4>Location:</h4> {location}
            <h4>Experience:</h4> {exp}
            {/* <h4>Preferred Console:</h4> {props.console} */}
            <h4>Bio:</h4> {bio}
            {props.user_id == props.match.params.id ? (
              <button onClick={handleEdit}>Edit</button>
            ) : null}
          </>
        )}
      </>
    )
  } else {
    return <></>
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id,
    username: reduxState.username,
    email: reduxState.email,
    location: reduxState.location,
    picture: reduxState.picture,
    bio: reduxState.bio,
    exp: reduxState.exp,
    console: reduxState.console
  }
}

export default connect(
  mapStateToProps,
  { updateUser }
)(User)
