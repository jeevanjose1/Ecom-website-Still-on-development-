import styled from "styled-components";
import { mediaQueries } from "../../../helper/mediaQuries";

//publicheader styles

export const Headerstyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 4rem;
  position: sticky;
  top: 0;
  z-index: 99;
  .menu {
    z-index: 8;
  }
`;

export const SignIn = styled.div`
  .menu {
    text-decoration: none;
    font-size: 1.8rem;
    color: #000000;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      color: #7c7c7c;
    }
  }
`;

//privateheader styles
export const HeaderstylePrivet = styled.div`
  background-color: var(--tertiary);
  .nav-bar {
    display: flex;
    min-height: 7.2rem;
    justify-content: space-between;
    padding: 0.5rem 3%;
    align-items: center;

    ${mediaQueries("small")`
          width: 100% ;
      `}
    .ham-menu {
      cursor: pointer;
      display: none;
      ${mediaQueries("small")`
         display: block;
      `}
    }
  }

  .search {
    flex-grow: 0.4;
    ${mediaQueries("small")`
         display: none;
      `}
    .form-controler {
      width: 100%;
      height: 3.5rem;
      display: flex;
      .form-input {
        width: 100%;
        padding: 0 1rem;
        border: none;
        background-color: var(--default);
        transition: all 0.1s ease;
        &:focus {
          outline: 3px solid var(--secondary);
          outline-offset: -3px;
        }
      }
      .form-btn {
        width: 5rem;
        display: grid;
        place-items: center;
        background-color: var(--secondary);
        transition: all 0.2s ease;
        color: white;

        &:hover {
          background-color: var(--primary);
        }
      }
    }
  }
  .search-small {
    flex-grow: 0.4;
    display: none;
    ${mediaQueries("small")`
         display: block;
      `}
    .form-controler {
      width: 100%;
      height: 4rem;
      display: flex;
      .form-input {
        width: 100%;
        padding: 0 1rem;
        border: none;
        background-color: var(--tertiary);
        transition: all 0.1s ease;
        &:focus {
          outline: 3px solid var(--secondary);
          outline-offset: -3px;
        }
      }
      .form-btn {
        width: 5rem;
        display: grid;
        place-items: center;
        background-color: var(--secondary);
        transition: all 0.2s ease;
        color: white;

        &:hover {
          background-color: var(--primary);
        }
      }
    }
  }
`;
export const MenuSection = styled.div`
  .menu-list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    .list-item {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
    button {
      background: none;

      padding: 0.7rem;
      border-radius: 0.5rem;
      color: var(--quaternary);
      transition: all 0.2s ease;
      &:hover {
        background: var(--tertiary);
        color: var(--primary);
      }
    }
    .profile {
      border-radius: 50%;
      overflow: hidden;
      display: grid;
      place-items: center;
      transition: all 0.2s ease;
      &:hover {
        border-radius: 110px;
        background: #e0e0e0;
        box-shadow: 3px 3px 8px #d0d0d0, -3px -3px 8px #f0f0f0;
      }
      img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
      }
    }
  }
`;
