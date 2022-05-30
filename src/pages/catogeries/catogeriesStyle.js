import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries.js";
export const CatogeriesStyle = styled.div`
  padding: 3rem 3%;
`;
export const Container = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: var(--font-size-xxxxxxxlarge);
    font-weight: var(--font-weight-medium);
  }
`;
export const CatogeryContainer = styled.div`
  background-color: var(--default);
  padding: 1.5rem;
  display: flex;
  border-radius: 0.5rem;
  width: 100%;
  ${mediaQueries("medium")`
   
   flex-direction: column;

  `}
`;
export const AddCatogerySection = styled.div`
  width: 33%;
  padding: 0 1rem;
  ${mediaQueries("medium")`
    width: 100%;

  `}
`;
export const Catogery = styled.div`
  width: calc(100% - 33%);
  ${mediaQueries("medium")`
    width: 100%;

  `}
  padding: 0 1rem;
`;
