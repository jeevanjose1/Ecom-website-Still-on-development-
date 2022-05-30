import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const DetailsSectionStyle = styled.div`
  margin: 0 0.5rem;
  background-color: var(--default);
  width: 30%;
  ${mediaQueries("medium")`
    width: 100%;
    margin: 0;
    `}
`;

export const Container = styled.div`
  .line {
    width: 100%;
    height: 1px;
    background-color: var(--black);
    margin: 1.5rem 0;
  }
  padding: 1rem;
  .user-detials {
    font-size: var(--font-size-xxxxlarge);
    font-weight: var(--font-weight-medium);
  }

  h2 {
    font-size: var(--font-size-xxlarge);
    font-weight: var(--font-weight-medium);
  }
  p {
    font-size: var(--font-size-xlarge);
    font-weight: var(--font-weight-normal);
  }
  .mgb {
    margin-bottom: 1.5rem;
  }
`;
