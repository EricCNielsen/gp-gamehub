import React, { useState } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  background-image: url("https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  border: 0.1px solid transparent;
  height: 100vh;
`;
function About({ id }) {
  return (
    <div id={id}>
      <AboutWrapper>
        <h1>This is where the about stuff will go </h1>
        <p>asdfghjk </p>
      </AboutWrapper>
    </div>
  );
}

export default About;
