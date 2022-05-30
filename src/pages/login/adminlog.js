import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/SignUp";

const Adminlogin = () => {
  const [activeSignin, setActiveSignin] = useState(true);
  const [activeSignup, setActiveSignup] = useState(false);

  console.log("render");

  return (
    <AdminLog>
      <h1 className="heading">Sign in / Sign up to your account</h1>
      <Main>
        <SignIn
          activeSignin={activeSignin}
          setActiveSignin={setActiveSignin}
          setActiveSignup={setActiveSignup}
        />
        <Line>
          <span>OR</span>
        </Line>
        <SignUp
          activeSignup={activeSignup}
          setActiveSignin={setActiveSignin}
          setActiveSignup={setActiveSignup}
        />
      </Main>
    </AdminLog>
  );
};

const AdminLog = styled.main`
  margin: 0rem 7rem;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heading {
    font-size: 3rem;
    font-weight: 500;
    color: #414141;
    margin: 0 0 8rem 0;
  }
`;

const Main = styled.div`
  display: flex;
  height: 70%;
`;

const Line = styled.div`
  width: 0.15rem;
  background-color: #00000060;
  height: 100%;
  margin: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 3rem;
    background-color: white;
  }
`;
export default React.memo(Adminlogin);
