import React from "react";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <Spinner>
      <div className="loadingio-spinner-dual-ring-ewitcymzw59">
        <div className="ldio-jyx5vvquzv">
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </Spinner>
  );
};

const Spinner = styled.div`
  margin-left: 3rem;
  @keyframes ldio-jyx5vvquzv {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .ldio-jyx5vvquzv div {
    box-sizing: border-box !important;
  }
  .ldio-jyx5vvquzv > div {
    position: absolute;
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    border: 4px solid #000;
    border-color: #8ea75c transparent #8ea75c transparent;
    animation: ldio-jyx5vvquzv 1s linear infinite;
  }
  .ldio-jyx5vvquzv > div:nth-child(2) {
    border-color: transparent;
  }
  .ldio-jyx5vvquzv > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  .ldio-jyx5vvquzv > div:nth-child(2) div:before,
  .ldio-jyx5vvquzv > div:nth-child(2) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 60px;
    background: #8ea75c;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #8ea75c;
  }
  .ldio-jyx5vvquzv > div:nth-child(2) div:after {
    left: -4px;
    top: 60px;
    box-shadow: 128px 0 0 0 #8ea75c;
  }
  .loadingio-spinner-dual-ring-ewitcymzw59 {
    width: 3rem;
    height: 3rem;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-jyx5vvquzv {
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-jyx5vvquzv div {
    box-sizing: content-box;
  }
`;
export default LoadingSpinner;
