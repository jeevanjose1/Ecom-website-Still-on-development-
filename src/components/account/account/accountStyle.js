import styled from "styled-components";

export const Acc = styled.div`
  padding: 3rem;
  input {
    width: 30rem;
    padding: 1rem;
    height: 4rem;
    background-color: #f5f5f5;
    border: none;
    outline: none;
  }
  button {
    width: 10rem;
    height: 3rem;
    outline: none;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #f1f1f1;
      color: black;
    }
  }
`;
export const First = styled.div`
  margin-bottom: 4rem;
`;
export const Second = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    margin-bottom: 2rem;
  }
`;
