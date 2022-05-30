import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import styled from "styled-components";
import { signinAction } from "../../actions/authActions/signIn";

const SignIn = ({ setActiveSignin, setActiveSignup, activeSignin }) => {
  const [signindata, setSignindata] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const signInHandleChange = (e) => {
    setSignindata({
      ...signindata,
      [e.target.name]: e.target.value,
    });
  };

  const signInSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAction(signindata, history));
  };
  return (
    <Signin
      onClick={() => {
        setActiveSignin(true);
        setActiveSignup(false);
      }}
      action=""
      style={
        activeSignin
          ? { opacity: 1, transform: "scale(1)" }
          : { opacity: 0.5, transform: "scale(.95)" }
      }
    >
      <div
        style={activeSignin ? { display: "none" } : { display: "block" }}
        className="wrap"
      ></div>
      <h1>Sign In</h1>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={signInHandleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={signInHandleChange}
      />
      <input
        onClick={signInSubmit}
        type="submit"
        name="submit"
        value="Sign In"
        id=""
      />
    </Signin>
  );
};
const Signin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  .wrap {
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &:first-child {
    margin-bottom: 6rem;
  }
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    color: #1d1d1d;
    margin-bottom: 5rem;
  }

  input {
    border: none;
    border-bottom: 0.1rem solid #555555;
    outline: none;
    width: 35rem;
    height: 5rem;
    font-size: 1.7rem;
    &::placeholder {
      font-size: 1.7rem;
    }
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    &:last-child {
      border: none;
      transition: all 0.3s ease;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
export default SignIn;
