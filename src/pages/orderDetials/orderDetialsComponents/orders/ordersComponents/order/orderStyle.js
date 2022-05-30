import styled from "styled-components";

export const OrderStyle = styled.tr`
  border: 1px solid var(--quaternary);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--tertiary);
  }
  td {
    padding: 1.2rem 1.6rem;
    font-size: var(--font-size-xlarge);
    .link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--black);
      .image {
        width: 4rem;
        height: 4rem;
        margin-right: 1.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
