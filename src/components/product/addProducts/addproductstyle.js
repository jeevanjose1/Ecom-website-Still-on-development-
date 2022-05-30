import styled from "styled-components";

export const AddProduct = styled.div`
  padding: 4rem;
  width: 95%;
  padding-right: 25rem;
  @media screen and (max-width: 970px) {
    padding-right: 0rem;
  }
  @media screen and (max-width: 860px) {
    padding-left: 0rem;
    padding-right: 2rem;
  }
  .btn {
    display: flex;
  }

  input {
    font-size: 1.6rem;
    width: 20rem;
    height: 4rem;
    padding: 1rem;
    outline: none;
    border: none;
    background-color: #f5f5f5;
  }
  select {
    border: none;
    background-color: #f5f5f5;
    width: 20rem;
    height: 4rem;
    padding: 1rem;
    font-size: 1.6rem;
    outline: none;

    &.option {
      border-radius: 0;
      border: none;
      margin-bottom: 2rem;
    }
    .hidden {
      display: none;
      color: #a5a5a5;
    }
  }
  button {
    border: none;
    outline: none;
    width: 15rem;
    height: 3rem;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: black;
      background-color: #e7e7e7;
    }
  }
`;

export const Firstsection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  input {
    @media screen and (max-width: 860px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
  select {
    @media screen and (max-width: 860px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 860px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Secondsection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 2rem;

  textarea {
    width: 100%;
    resize: none;
    padding: 1rem;
    outline: grey;
    border-color: #d6d6d6;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
export const Thirdsection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  .first {
    /* width: 50%; */
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;

    input {
      &:not(:last-child) {
        border-right: 1px solid black;
        @media screen and (max-width: 1240px) {
          border: none;
        }
      }
      width: 15rem;
      @media screen and (max-width: 1240px) {
        width: 45%;
      }
    }
    @media screen and (max-width: 1240px) {
      margin-bottom: 2rem;
      width: 100%;

      border: none;
    }
  }
  .second {
    /* width: 50%; */
    display: flex;
    justify-content: space-between;

    input {
      width: 15rem;
      border-right: 1px solid black;
      @media screen and (max-width: 1240px) {
        width: 45%;
        border: none;
      }
    }
    select {
      width: 15rem;

      @media screen and (max-width: 1240px) {
        width: 45%;
      }
    }
    @media screen and (max-width: 1240px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1240px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Fourthsection = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;
export const Drag = styled.div`
  width: 50%;
  height: 15rem;
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 2rem;
  @media screen and (max-width: 970px) {
    width: 100%;
    margin-bottom: 3rem;
  }
  &:hover {
    background-color: #f3f3f3;
  }
  p {
    font-size: 1.2rem;
  }
`;
