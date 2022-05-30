import React from "react";
import styled from "styled-components";

const Accoirdian = ({ state, overlay, signupdata, setOverlay }) => {
  return (
    <Varify
      style={overlay ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div
        onClick={() => {
          setOverlay(false);
          localStorage.removeItem("rj");
          localStorage.removeItem("varified");
        }}
        className="overlay"
      ></div>{" "}
      <div className="content">
        <h2>
          {localStorage.getItem("varified")
            ? state + " but not varified please varify"
            : state}
        </h2>

        {localStorage.getItem("varified") || localStorage.getItem("rj") ? (
          <a href={`https://mail.google.com/mail/u/${signupdata.email}`}>
            Goto your email
          </a>
        ) : (
          ""
        )}
      </div>
    </Varify>
  );
};
const Varify = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 0;
  }
  .content {
    width: 50rem;
    height: 20rem;
    background-color: white;
    z-index: 1;
    display: grid;
    place-items: center;
    a {
      font-size: 2rem;
      color: black;
      margin-bottom: 3rem;
    }
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-top: 3rem;
    }
  }
`;
export default Accoirdian;
