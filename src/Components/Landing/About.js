import React, { useState } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  background: gainsboro;
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
