import styled from "styled-components";

export const SingleUserStyle = styled.tr`
  &:hover {
    background-color: var(--tertiary);
  }
  td {
    padding: 0.8rem;
    font-size: var(--font-size-xlarge);
    &:nth-child(5) {
      text-align: right;
    }
  }
`;
