import styled from "styled-components";

export const Addcatog = styled.div`
  padding: 3rem;
  .first {
    margin-bottom: 2rem;
    display: flex;
    h3 {
      font-weight: 500;
      background-color: #f7f7f7;
    }
    .dropdown {
      width: 25rem;
      height: 4rem;
      font-size: 1.6rem;
      padding: 1rem;
      border: none;
      outline: none;
      background-color: #eeeeee;
      .hidden {
        /* display: none; */
      }
      option {
        height: 4rem;
      }
    }
  }
  form {
    input {
      width: 25rem;
      height: 4rem;
      background-color: #f5f5f5;
      border: none;
      outline: none;
      padding: 1rem;
      font-size: 1.6rem;

      &:first-child {
        margin-right: 2rem;
      }
      &::placeholder {
        font-size: 1.6rem;
      }
      @media screen and (max-width: 860px) {
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }

    button {
      width: 20rem;
      height: 4rem;
      border: none;
      outline: none;
      background-color: black;
      color: white;
      transition: all 0.2s ease;
      cursor: pointer;
      font-size: 1.6rem;

      &:hover {
        background-color: #f3f3f3;
        color: black;
      }
    }
  }
`;
