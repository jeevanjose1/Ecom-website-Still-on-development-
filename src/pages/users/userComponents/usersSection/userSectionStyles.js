import styled from "styled-components";
import { mediaQueries } from "../../../../helper/mediaQuries";
export const UserSectionStyle = styled.div`
  width: 70%;
  background-color: var(--default);
  padding: 1.5rem;
  ${mediaQueries("medium")`
    width: 100%;
    `}
`;
export const Container = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    thead {
      th {
        font-size: var(--font-size-xlarge);
        font-weight: var(--font-weight-medium);
        opacity: 0.5;
        padding: 0.8rem;
        &:nth-child(1) {
          width: 10%;
        }
        &:nth-child(2) {
          width: 20%;
        }
        &:nth-child(3) {
          width: 25%;
        }
        &:nth-child(4) {
          width: 15%;
        }
        &:nth-child(5) {
          width: 30%;
          text-align: right;
        }
      }
    }
  }
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem;
  border-bottom: 1px solid var(--primary);
  .search {
    width: 30%;
    input {
      width: 100%;
      height: 4rem;
      padding: 1rem;
    }
  }
  .filter {
    width: 30%;
    select {
      width: 100%;
      height: 4rem;
      padding: 1rem;
    }
  }
`;
