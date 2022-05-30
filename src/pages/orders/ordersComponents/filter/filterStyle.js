import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";

export const FilterStyle = styled.div`
  padding: 1.5rem;
`;

export const Container = styled.div`
  h1 {
    font-weight: var(--font-weight-medium);
    margin-bottom: 1.5rem;
  }
  input {
    padding: 0.8rem 1.2rem;
  }

  label {
    font-size: var(--font-size-xlarge);
    margin-bottom: 1rem;
  }
  button {
    padding: 0.8rem 1.2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;
