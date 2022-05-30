import styled from "styled-components";

export const DropdownStyle = styled.div`
    position: relative;
    .ham-menu {
      cursor: pointer;
    }
    ul {
      position: absolute;
      top: 2rem;
      right: 1rem;
      background-color: var(--default);
     min-width: 15rem;
      padding: 1.5rem;
      z-index: 999;
      display: none;
      box-shadow: -11px 13px 55px -21px rgba(0, 0, 0, 0.48);
      li {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
        a{
            color:var(--black);
            text-decoration:none;
        }
      }
    }
  }
`;
