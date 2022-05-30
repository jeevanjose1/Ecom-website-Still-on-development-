import React from "react";
// import logo from "../../assets/images/logo.svg";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Headerstyle, SignIn } from "./headerStyles";

const PublicHeader = () => {
  return (
    <Headerstyle>
      <div className="logowrappper">
        <Link to="/">
          <img src={""} alt="" />
        </Link>
      </div>

      <SignIn>
        <Link to="/sign-in" className="menu">
          Sign in
        </Link>
      </SignIn>
    </Headerstyle>
  );
};

export default PublicHeader;
