import React, { useState } from "react";
import styled from "styled-components";
import firstimg from "../../assets/landing1.jpg";

const AboutWrapper = styled.div`
  background-image: url(${firstimg});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    background-image: url("https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-position: center;
  }
`;

const WelcomeMessage = styled.h1`
  color: white;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
`;

function About({ id }) {
  return (
    <div id={id}>
      <AboutWrapper>
        <MessageWrapper>
          <WelcomeMessage>Welcome to GameHub</WelcomeMessage>
        </MessageWrapper>
      </AboutWrapper>
    </div>
  );
}

export default About;
