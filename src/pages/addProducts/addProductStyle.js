import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries";
export const AddProductStyle = styled.div`
  padding: 3rem 15%;
  ${mediaQueries("large")`
  padding: 3rem 8%;

    `}
`;
export const AddProductContainer = styled.div`
  background-color: var(--default);
  padding: 1.5rem;
  margin: 0 auto;
  border-radius: 1rem;
  .flex {
    display: flex;
    margin-bottom: 4rem;
    border-bottom: 1px solid #cfdbe6;
    padding-bottom: 4rem;
    ${mediaQueries("large")`
    flex-direction: column;
    
  

    `}
  }
  h2 {
    font-size: var(--font-size-xxlarge);
    font-weight: var(--font-weight-medium);
    width: 100%;
    ${mediaQueries("large")`
   margin-bottom: 1rem;

    `}
  }
  .width {
    width: 100%;
    ${mediaQueries("large")`
   width: 100%;

    `}
  }
  .title {
    width: 33%;
    ${mediaQueries("large")`
   width: 100%;

    `}
  }
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      font-size: var(--font-size-xlarge);
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      height: 4rem;
      padding: 1.2rem 0.6rem;

      margin-bottom: 1.5rem;
    }
    textarea {
      padding: 1.2rem 0.6rem;
      margin-bottom: 1.5rem;
      resize: vertical;
      height: 20rem;
    }
  }
  select {
    width: 20rem;
    height: 3rem;
    padding: 0 0.6rem;
    margin-bottom: 1.5rem;
    ${mediaQueries("small")`
 width: 100%    
  

    `}
    &:first-child {
      margin-right: 2rem;
    }
  }
`;
export const Title = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: var(--font-size-xxxxxxlarge);
    font-weight: var(--font-weight-medium);
  }
`;
export const GeneralInfo = styled.div``;
export const Pricing = styled.div``;
export const Catogery = styled.div``;
export const Stocks = styled.div``;
export const Media = styled.div`
  input {
    border: 1px solid #cfdbe6;
    padding: 0 !important;
    &::-webkit-file-upload-button {
      height: 100%;
      width: 10rem;
      margin-right: 2rem;
      border: none;
      background-color: var(--primary);
      color: var(--default);
      font-size: var(--font-size-xlarge);
    }
  }
`;
export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    ${mediaQueries("small")`
   width: 100%;
   height: 3rem;

    `}
  }
`;
