import styled from "styled-components";
import { mediaQueries } from "../../helper/mediaQuries";
export const DashboardStyle = styled.div`
  padding: 3rem 3%;
`;
export const Container = styled.section``;
export const Header = styled.div`
  margin-bottom: 3rem;
  .title {
    font-size: var(--font-size-xxxxlarge);
    font-weight: var(--font-weight-medium);
  }
`;
export const SectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SectionTwo = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  ${mediaQueries("large")`
        flex-direction: column;

  `}
`;
export const Graph = styled.div`
  width: 50%;
  margin-right: 1.5rem;
  background-color: var(--default);
  padding: 1.5rem;
  border-radius: 0.5rem;
  h1 {
    font-size: var(--font-size-xxxlarge);
    font-weight: var(--font-weight-light);
  }
  ${mediaQueries("large")`
       width: 100%;
    margin-bottom: 1.5rem;
  `}
`;

export const Users = styled.div`
  background-color: var(--default);
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 50%;
  height: 35rem;
  overflow: hidden;

  position: relative;
  .title {
    font-size: var(--font-size-xxxlarge);
    font-weight: var(--font-weight-light);
    margin-bottom: 1.5rem;
  }
  ${mediaQueries("large")`
       width: 100%;

  `}
  .more-btn {
    position: absolute;
    width: 100%;
    height: 5rem;
    left: 0;
    bottom: 0;
    font-size: var(--font-size-xxlarge);
  }
`;
export const SectionThree = styled.div`
  padding: 1.5rem;
  background-color: var(--default);
  border-radius: 0.5rem;s
`;
export const TableContainer = styled.div`
  .title {
    font-size: var(--font-size-xxxlarge);
    font-weight: var(--font-weight-light);
    margin-bottom: 1.5rem;
  }
`;
