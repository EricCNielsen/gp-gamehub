import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About.js";
import Creators from "./Creators.js";
import Auth from "../../utils/Auth/Auth";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

const LandingWrapper = styled.div`
  display: flex;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 200px;
  left: 0;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  diplay: flex;
  width: 100%;
  justify-content: center;
`;

function Landing(props) {
  const [value, setValue] = useState("");
  let handleChange = e => {
    setValue(e.target.value);
  };

  const auth = new Auth(props.history);

  return (
    <LandingWrapper>
      <ListWrapper>
        <Link
          to="about"
          scroll="about"
          activeClass="active"
          spy={true}
          smooth={true}
        >
          <Radio
            checked={value === "about"}
            onChange={handleChange}
            value="about"
            name="about"
            aria-label="A"
          />
        </Link>
        <Link
          to="creators"
          scroll="creators"
          activeClass="active"
          spy={true}
          smooth={true}
        >
          <Radio
            checked={value === "creators"}
            onChange={handleChange}
            value="creators"
            name="creators"
            aria-label="B"
          />
        </Link>
      </ListWrapper>
      <ContentWrapper>
        <About id="about" />
        <Creators id="creators" auth={auth} />
      </ContentWrapper>
    </LandingWrapper>
  );
}

export default Landing;
