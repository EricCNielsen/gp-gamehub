import React from "react";
import './group.css';
import { Link } from "react-router-dom";

const GroupMembers = ({members}) => {
    return(
        <div className="members">
        <h2>Members</h2>
        <div className='member'>
        {members.map((member, i) => {
          return (
            <Link to={`/user/${member.user_id}`}>
              <div id='mem' key={i}>
              <img id='memImg' src={member.picture} alt='picture'/>
              <br/>
                <p> 
                {member.username}
                </p>
              </div>
            </Link>
          )
        })}
        </div>
      </div>
    )
}

export default GroupMembers