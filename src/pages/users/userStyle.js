import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries.js";
export const UserStyle = styled.div`
  padding: 3rem 3%;
`;
export const Container = styled.div``;
export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ${mediaQueries("medium")`
  flex-direction: column;
  `}
`;
export const Title = styled.div`
  h1 {
    font-size: var(--font-size-xxxxxxxlarge);
    font-weight: var(--font-weight-medium);
    margin-bottom: 2rem;
  }
`;
