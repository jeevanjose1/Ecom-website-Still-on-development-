import styled from "styled-components";

export const CatogeryStyle = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem 1rem;
  &:hover {
    background-color: var(--tertiary);
  }
`;
export const Container = styled.div`
  display: flex;
  span {
    font-size: var(--font-size-xlarge);

    font-weight: var(--font-weight-medium);
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
