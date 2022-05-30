import styled from "styled-components";

export const Pro = styled.div`
  padding: 3rem;
  .upload {
    display: flex;
  }
  form {
    input {
      width: 30rem;
      height: 4rem;
      background-color: #eeeeee;
      border: none;
      outline: none;
      padding: 1rem;
      margin-bottom: 2rem;
    }
    button {
      width: 10rem;
      height: 3rem;
      outline: none;
      border: none;
      transition: all 0.2s ease;
      color: white;
      cursor: pointer;
      background-color: black;
      &:hover {
        color: black;
        background-color: #dfdfdf;
      }
    }
  }
`;
export const Drag = styled.div`
  width: 30rem;
  height: 15rem;
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 2rem;
  margin-bottom: 2rem;
  .head {
    text-align: center;
    p {
      &:first-child {
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
    }
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    margin-bottom: 3rem;
  }
  &:hover {
    background-color: #f3f3f3;
  }
  p {
    font-size: 1rem;
  }
`;
