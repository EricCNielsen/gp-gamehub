import React, { useState } from "react";
import styled from "styled-components";

const CreatorsWrapper = styled.div`
  background: orange;
  border: 0.1px solid transparent;
  height: 100vh;
`;
function Creators({ id }) {
  return (
    <CreatorsWrapper id={id}>
      <h1>this is where the creator stuff will go</h1>
      <p>asdfghjk </p>
    </CreatorsWrapper>
  );
}

export default Creators;
