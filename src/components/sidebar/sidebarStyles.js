import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries";

export const SidebarContainer = styled.div`
  background-color: var(--primary);
  width: ${(props) => (props.slideLeft ? "26rem" : "6rem")};

  transition: all 0.1s ease-in-out;
  ${mediaQueries("small")`
        max-width: 26rem ;
          position: fixed;
          top: 0;
          left:-26rem;
          height: 100vh;
          z-index: 100;

  `}
`;

export const MainContainer = styled.div``;

export const Logo = styled.div`
  .logo {
    width: 10rem;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: ${(props) => (props.slideLeft ? "space-between" : "center")};
  align-items: center;
  padding: 1.6rem 1.2rem;
  transition: all 0.3s ease-in-out;
`;
export const Nav = styled.div`
  cursor: pointer;
`;

export const Submenu = styled.div`
  width: 100%;
  height: 100%;
`;
export const Container = styled.ul`
  height: 100%;
`;
