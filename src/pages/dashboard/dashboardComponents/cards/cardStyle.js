import styled from "styled-components";
import { mediaQueriesMin } from "../../../../helper/mediaQuries";

export const Card = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
  background-color: var(--default);
  padding: 1.5rem;
  border-radius: 0.5rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  ${mediaQueriesMin("medium")`
        flex:1;

  `}
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: var(--secondary);
  display: grid;
  place-items: center;
  color: var(--primary);
  margin-right: 1rem;
`;
export const Detials = styled.div`
  font-size: var(--font-size-xxlarge);
  .title {
    font-size: inherit;
    font-weight: var(--font-weight-medium);
  }
  .sales {
    font-size: var(--font-size-xlarge);
    font-weight: var(--font-weight-light);
  }
`;
