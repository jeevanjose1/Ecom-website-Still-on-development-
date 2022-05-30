import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #eeeeee;
  padding: 1rem;
  text-transform: capitalize;
  color: #303030;
  .drop {
    height: 3.1rem;
    width: 13rem;
    padding: 0 1rem;
    outline: none;
    border: none;
    border-right: 1px solid black;
    .hidden {
      display: none;
    }
  }
  input {
    width: 20rem;
    height: 3rem;
    outline: none;
    border: none;
    padding: 1rem;
    font-size: 1.6rem;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .submitBtn {
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const Catogerys = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 5rem;
`;
export const Options = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  margin-right: 5rem;
`;
export const Edit = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;
export const Delete = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  .id {
    visibility: hidden;
    display: none;
  }
`;
