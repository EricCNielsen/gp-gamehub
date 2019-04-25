import React, { useState, useEffect } from "react";
import "./group.css";
import axios from "axios";
import { updateClan } from "../../ducks/reducer";
import { connect } from "react-redux";
import InGroupMini from "./InGroupMini";
import GroupInfo from "./GroupInfo";
import GroupMembers from "./GroupMembers";


const Group = props => {
  const [url, setUrl] = useState(""),
        [name, setName] = useState(""),
        [bio, setBio] = useState(""),
        [members, setMembers] = useState([]),
        [clan, setClan] = useState([]),
        [isLoading, setIsLoading] = useState(true)

        

  useEffect(() => {
    let fetchData = async () => {
        getClan();
        getMembers();
      }
    fetchData()
    },[]);

  const getMembers = () => {
    const {id} = props.match.params;
   axios.get(`/api/clan/${id}/members`).then(res => {
     setMembers(res.data);
   });
  };

  const getClan = () => {
    const { id } = props.match.params;
    if (id) {
      axios.get(`/api/clan/${id}`).then(res => {
        setName(res.data[0].name);
        setBio(res.data[0].bio);
        setUrl(res.data[0].avatar);
        setClan(res.data[0])
        props.updateClan(res.data[0]);
        setIsLoading(false)
      }
      );
    } else {
      const { clanName, clanBio, clanAvatar } = props;
      setName(clanName);
      setBio(clanBio);
      setUrl(clanAvatar);
    }
  };

    return (
      <div className="clan">
        <div className="two">
        {isLoading ? (
          <div>Loading...</div>
        ): (
          <div>
            <GroupInfo clan={clan} user_id={props.user_id} props={props}/>
            <GroupMembers members={members}/>
          </div>
        )}
        </div>
          <InGroupMini />
      </div>
    );
}
  
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

export default connect(mapStateToProps,{ updateClan })(Group);
