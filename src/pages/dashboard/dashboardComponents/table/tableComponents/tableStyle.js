import styled from "styled-components";
import { mediaQueries } from "../../../../../helper/mediaQuries";
export const TableStyle = styled.tr`
  width: 100%;
  height: 6rem;
  font-size: var(--font-size-xlarge);

  border-radius: 0.5rem;
  &:not(:last-child) {
    border-bottom: 0.5px solid black;
  }

  td {
    padding: 0.5rem;
  }
  .name {
    text-transform: capitalize;
    font-weight: var(--font-weight-medium);
  }
  .email {
    ${mediaQueries("medium")`
      display: none;

  `}
  }

  .detials {
    position: relative;
  }
`;
