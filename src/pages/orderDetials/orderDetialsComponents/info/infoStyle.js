import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const InfoContainer = styled.div`
  padding: 1.5rem;
`;
export const Container = styled.div`
  display: flex;
  ${mediaQueries("medium")`
   
   flex-direction: column;

  `}
`;
