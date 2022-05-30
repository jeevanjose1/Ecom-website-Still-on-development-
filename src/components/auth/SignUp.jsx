import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signupAction } from "../../actions/authActions/signUp";
import Accoirdian from "./Accoirdian";

const SignUp = ({ activeSignup, setActiveSignin, setActiveSignup }) => {
  const dispatch = useDispatch();
  const [signupdata, setSignupdata] = useState({});
  const [showAccordian, setShowAccordian] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const admin = useSelector((state) => state.signupReducer.payload);
  const signUpHandleChange = (e) => {
    setSignupdata({
      ...signupdata,
      [e.target.name]: e.target.value,
    });
  };
  const signUpSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signupAction(signupdata));
    setOverlay(true);
    setShowAccordian(true);
  };

  return (
    <div>
      <Signin
        onClick={() => {
          setActiveSignin(false);
          setActiveSignup(true);
        }}
        action=""
        style={
          activeSignup
            ? { opacity: 1, transform: "scale(1)" }
            : { opacity: 0.5, transform: "scale(.95)" }
        }
      >
        <div
          style={activeSignup ? { display: "none" } : { display: "block" }}
          className="wrap"
        ></div>
        <h1>Sign up</h1>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={signUpHandleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={signUpHandleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={signUpHandleChange}
        />
        <input
          onClick={signUpSubmit}
          type="submit"
          name="signin"
          value="Sign Up"
          id=""
        />
      </Signin>

      {showAccordian && (
        <Accoirdian
          state={
            localStorage.getItem("rj") ? "Please confirm your email" : admin
          }
          overlay={overlay}
          setOverlay={setOverlay}
          signupdata={signupdata}
        />
      )}
    </div>
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

export default SignUp;
