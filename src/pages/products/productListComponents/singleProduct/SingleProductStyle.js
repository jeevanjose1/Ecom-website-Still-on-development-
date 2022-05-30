import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const SingleProductStyle = styled.div`
  &:not(:last-child) {
    border-bottom: 0.5px solid var(--grey);
  }
  padding: 1rem 0;
`;
export const Container = styled.div`
  font-size: var(--font-size-xxlarge);

  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  ${mediaQueries("large")`
     font-size: var(--font-size-xlarge);

  `}
  ${mediaQueries("medium")`
     font-size: var(--font-size-large);
     justify-content: space-between;

  `}
  ${mediaQueries("small")`
     font-size: var(--font-size-medium);
 

  `}
`;
export const Check = styled.div`
  width: 3%;
  padding: 0 0.5rem;
  input {
    width: 1.5rem;
    height: 1.5rem;
  }
  ${mediaQueries("large")`
        display: none;

  `}
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 50%);
  padding: 0 0.5rem;

  .product-img {
    width: 10rem;
    height: 10rem;
    margin-right: 2rem;
    ${mediaQueries("large")`
         width: 6rem;
    height: 6rem;

  `}
    img {
      width:10rem;
      height: 10rem;
      ${mediaQueries("large")`
         width: 6rem;
    height: 6rem;

  `}
  }
  .product-name {
    h4 {
      font-weight: var(--font-weight-medium);
    }
  }
`;
export const Price = styled.div`
  width: 16%;
  padding: 0 0.5rem;
`;
export const Status = styled.div`
  width: 16%;
  padding: 0 0.5rem;
`;
export const Date = styled.div`
  width: 16%;
  padding: 0 0.5rem;
  ${mediaQueries("medium")`
        display: none;

  `}
`;
export const Action = styled.div`
  position: relative;
  width: 5%;

  display: flex;
  justify-content: flex-end;
`;
