import styled from "styled-components";

export const CatogeryListStyle = styled.div``;
export const Head = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem 1rem;

  span {
    font-size: var(--font-size-xlarge);
    opacity: 0.6;
  }
  .checkbox {
    flex: 0.1;
    padding-top: 0.5rem;
  }
  .name {
    flex: 0.3;
  }
  .description {
    flex: 0.4;
  }
  .slug {
    flex: 0.2;
  }
  .Action {
    flex: 0.2;
    display: flex;
    justify-content: flex-end;
  }
`;

export const SingleCatogery = styled.div``;
