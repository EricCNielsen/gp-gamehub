import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import styled from "styled-components";

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

function PostViewer(props) {
  useEffect(() => {
    getClanPosts();
  }, [props.id]);
  const [posts, setPosts] = useState([]);
  const [noPosts, setNoPosts] = useState(true);

  async function getClanPosts() {
    console.log("hit");
    try {
      let clanPosts = await axios.get(`/api/clan-posts/${props.id}`);
      if (clanPosts.data.length > 0) {
        setNoPosts(false);
        setPosts(clanPosts.data);
      } else {
        setNoPosts(true);
      }
    } catch (err) {
      console.log(`there was an error pulling the posts: ${err}`);
    }
  }

  const postsList = posts
    .filter(post => !post.parent_id)
    .map(post => {
      function replies() {
        const replies = posts.filter(post => post.parent_id);
        if (replies.length > 0 && replies[0].parent_id === post.post_id) {
          const repliesCount = replies.length;
          return (
            <button>
              {repliesCount} {repliesCount === 1 ? "reply" : "replies"}
            </button>
          );
        } else {
          return null;
        }
      }
      return (
        <div key={post.post_id} style={{ borderBottom: "1px solid black" }}>
          <AuthorInfo>
            <img
              src={post.picture}
              alt={post.username}
              style={{ width: "3em", height: "3em", borderRadius: "50%" }}
            />
            <p style={{ paddingLeft: "10px" }}>
              posted by {post.username} on {post.date}
            </p>
          </AuthorInfo>
          <ReactQuill theme="bubble" value={post.content} readOnly={true} />
          {replies()}
        </div>
      );
    });

  return <div>{!noPosts ? postsList : <h2>No posts to display</h2>}</div>;
}

export default PostViewer;
