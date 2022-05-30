import styled from "styled-components";

export const OptionsStyles = styled.li`
  width: 100%;
  border-radius: 0.5rem;
  height: auto;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  transition: all 0.3s ease;
`;
export const Containers = styled.div`
  height: 4.8rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 1rem;
`;
export const Logos = styled.div`
  display: grid;
  place-items: center;
`;
export const Title = styled.div`
  width: 100%;
  font-size: var(--font-size-medium);
`;

export const SubOptions = styled.div`
  width: 100%;
  background-color: var(--tertiary);
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
  padding: 0rem 1rem 1rem 3rem;

  margin-bottom: 0.5rem;
  .option {
    font-size: var(--font-size-xlarge);
    padding: 0.7rem;

    .link {
      text-decoration: none;
      color: var(--grey);
      font-weight: var(--font-weight-medium);
      transition: color 0.3s ease;
      &:hover {
        color: var(--primary);
      }
    }
  }
`;
export const Main = styled.div`
  height: ${(props) => (props.props ? props.height : "48")}px;
  background-color: var(--tertiary);
  overflow: ${(props) => (props.slideLeft ? "hidden" : "visible")};
  margin: 0.6rem;
  /* padding: 0.5rem; */
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
`;
export const Arrow = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: rotateZ(${(props) => (props.open ? "180deg" : "0")});
`;

export const SubOptionsHover = styled.div`
  position: absolute;
  background-color: var(--primary);
  width: 15rem;
  height: 0rem;
  overflow: hidden;
  left: 5.5rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -9px 12px 35px -20px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: -9px 12px 35px -20px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: -9px 12px 35px -20px rgba(0, 0, 0, 0.66);

  transition: all 0.2s ease;

  .option {
    font-size: var(--font-size-xlarge);
    padding: 0.7rem;

    .link {
      text-decoration: none;
      color: var(--default);
      font-weight: var(--font-weight-medium);
      transition: color 0.3s ease;
      &:hover {
        color: var(--default);
      }
    }
  }
`;

export const DashboardStyle = styled.div`
  background-color: var(--tertiary);
  margin: 0.6rem;
  border-radius: 0.5rem;
  height: 4.6rem;
  padding: 1.4rem;
  .link {
    text-decoration: none;
    font-size: var(--font-size-xlarge);
    font-weight: var(--font-weight-bold);
    color: var(--black);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const LogosDash = styled.div``;
