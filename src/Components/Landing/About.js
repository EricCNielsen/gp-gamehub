import React from "react";
import styled from "styled-components";
import firstimg from "../../assets/landing1.jpg";

const AboutWrapper = styled.div`
  background-image: url(${firstimg});
  /* background: black; */
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
  text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  font-size: 75px;
  /* opacity: 1 !important; */
  letter-spacing: 3px;
  margin-top: 5%;
  margin-bottom: 0;
  animation: text-flicker 3s linear;
  animation-duration: 3s;
  @keyframes text-flicker {
    0% {
      opacity: 0.5;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }

    2% {
      opacity: 1;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }
    8% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }
    9% {
      opacity: 1;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }
    12% {
      opacity: 0.1;
      text-shadow: 0px 0px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }
    20% {
      opacity: 1;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }
    25% {
      opacity: 0.3;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }
    30% {
      opacity: 1;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
      /* rgba(242, 22, 22, 1); */
    }

    /* 70% {
      opacity: 0.7;
      text-shadow: 0px 0px 29px rgba(236, 114, 39, 0.9);
    }

    72% {
      opacity: 0.2;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    }

    77% {
      opacity: 1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    }
    100% {
      opacity: 1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    } */
  }
`;

const P = styled.p`
  font-size: 30px;
  margin: 0 0 8% 0;
  color: white;
  font-weight: 100;
  font-variant: small-caps;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0, 0.5);
  border: 5px solid;
  justify-content: center;
  align-items: center;
`;

function About({ id }) {
  return (
    <div id={id}>
      <AboutWrapper>
        <MessageWrapper>
          <WelcomeMessage>Welcome to GameHub</WelcomeMessage>
          <P>where gamers connect</P>
        </MessageWrapper>
      </AboutWrapper>
    </div>
  );
}

export default About;
