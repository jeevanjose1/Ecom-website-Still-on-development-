import styled from "styled-components";
import { mediaQueries } from "../../../../../../helper/mediaQuries";
export const DeliverDetialsWrapper = styled.div`
  width: calc(100% / 3);
  ${mediaQueries("medium")`
   
   width:100%;
   margin-bottom:1.5rem;
   background-color: #f5f5f5;
   padding:1rem;

  `}
`;
export const Container = styled.div`
  display: flex;
  .icon {
    background-color: var(--secondary);
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    display: grid;
    place-items: center;
    color: var(--primary);
    margin-right: 1rem;
  }

  .detials {
    .heading {
      font-size: var(--font-size-xxlarge);
      font-weight: var(--font-weight-medium);
    }
    .detial {
      font-size: var(--font-size-xlarge);
      line-height: 1.8;
    }
  }
`;
