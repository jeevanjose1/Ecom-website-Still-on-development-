import styled from "styled-components";

export const Products = styled.div`
  padding: 4rem;
  @media screen and (max-width: 860px) {
    padding-left: 1rem;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #eeeeee;
  padding: 1rem;
  text-transform: capitalize;
  color: #303030;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
export const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const Price = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const Catogerys = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const Options = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 7rem;
`;
export const Edit = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
`;
export const Delete = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
`;
