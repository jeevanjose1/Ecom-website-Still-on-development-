import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
const DatePicker = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <Picker>
      <Main style={active ? { transform: "translateX(0)" } : { width: "" }}>
        <Head>
          {pathname === "/" && (
            <Heading>
              <h3>Month</h3>
              <h2>January 2021</h2>
              <button onClick={() => setActive(false)}>
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </Heading>
          )}

          <Dropdown>
            <ul>
              <li>january</li>
              <li>febuary</li>
              <li>march</li>
              <li>april</li>
              <li>may</li>
              <li>june</li>
              <li>july</li>
              <li>august</li>
              <li>september</li>
              <li>october</li>
              <li>november</li>
              <li>december</li>
            </ul>
          </Dropdown>
        </Head>
        <Months>
          <h2>January</h2>
          <ul>
            <li>
              <span>1</span> sunday
            </li>
            <li>
              <span>1</span> monday
            </li>
            <li>
              <span>1</span> thursday
            </li>
            <li>
              <span>1</span> thersday
            </li>
            <li>
              <span>1</span> friday
            </li>
            <li>
              <span>1</span> saterday
            </li>
            <li>
              <span>1</span> sunday
            </li>
          </ul>
        </Months>
      </Main>
      <Line></Line>
      <Arrow onClick={() => setActive(!active)}>
        <FontAwesomeIcon className="icon" icon={faArrowRight} size="2x" />
      </Arrow>
    </Picker>
  );
};

const Picker = styled.div`
  width: 28rem;
  height: 100%;
  position: relative;

  @media screen and (max-width: 970px) {
    width: 2rem;
    height: 7.5rem;
    background-color: #00000040;
  }
`;
const Line = styled.div`
  height: 84vh;
  width: 0.02rem;
  background-color: #00000040;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;
const Main = styled.div`
  background-color: white;
  transition: all 0.5s ease;
  width: 28rem;
  @media screen and (max-width: 970px) {
    width: 28rem;
    transform: translateX(-100%);
    overflow: hidden;
    position: absolute;
    left: 0%;
    z-index: 9999;
    height: 100vh;
  }
`;
const Head = styled.div`
  width: 28rem;
  height: 7.5rem;
  background-color: #4c6133;
  color: white;
  position: relative;
`;
const Heading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.1rem;
  h3 {
    font-weight: 400;
    opacity: 0.5;
  }
  h2 {
    font-weight: 400;
  }

  button {
    display: none;
    @media screen and (max-width: 970px) {
      display: flex;
      background: none;
      border: none;
      outline: none;
      color: white;
      cursor: pointer;
    }
  }
`;
const Dropdown = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  height: 25rem;
  background-color: #4c6133;
  left: 0;
  top: 7.8rem;
  z-index: 9999;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    li {
      font-size: 1.6rem;
      text-transform: capitalize;
      cursor: pointer;
      width: 100%;
      padding: 1rem 0;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: #313f21;
      }
      &:not(:last-child) {
        margin-bottom: 0rem;
      }
    }
  }
`;
const Months = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 2rem 5rem 2rem 0;
  }
  ul {
    list-style: none;
    font-size: 1.6rem;
    width: 100%;
    height: 50rem;

    li {
      text-transform: capitalize;
      margin-bottom: 4rem;
      width: 100%;

      padding-left: 8rem;
      position: relative;
      transition: all 0.3s ease;
      font-weight: 600;
      opacity: 0.5;
      span {
        margin-right: 1.3rem;
      }
      &::before {
        content: "";
        position: absolute;
        width: 3rem;
        height: 0.2rem;
        top: 50%;
        right: 5rem;
        background-color: black;
        opacity: 0;
        transition: all 0.3s ease;
      }
      &:hover {
        font-size: 2.3rem;
      }
      &:hover::before {
        opacity: 1;
        right: calc(5rem - 2.3rem);
      }
    }
  }
`;
const Arrow = styled.div`
  display: none;
  @media screen and (max-width: 970px) {
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    padding-left: 1rem;
    cursor: pointer;
    &:hover {
      padding-left: 2rem;
    }
  }
`;
export default DatePicker;
