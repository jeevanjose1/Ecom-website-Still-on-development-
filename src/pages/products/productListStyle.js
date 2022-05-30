import styled from "styled-components";

export const ProductListStyle = styled.div`
  padding: 3rem 3%;
`;
export const Container = styled.div``;
export const Title = styled.div`
  font-size: var(--font-size-xlarge);
  margin-bottom: 2rem;
  h1 {
    font-weight: var(--font-weight-medium);
  }
`;
export const Products = styled.div`
  background-color: var(--default);
  border-radius: 0.5rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  border-bottom: 1px solid var(--grey);
  input {
    border-radius: 0.5rem;
    border: 1px solid var(--grey);
    outline: none;
    padding: 1rem;
  }
  input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 2.4rem;
  }

  select {
    height: 4rem;
    width: 25%;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    padding: 1rem;
    border: 1px solid var(--grey);
    &:last-child {
      width: 16%;
    }
    &:not(:last-child) {
      margin-right: auto;
    }
  }

  input[type="date"] {
    height: 4rem;
    width: 16%;
    margin-right: 2.4rem;
  }
`;
export const Product = styled.div`
  padding: 2rem;
`;
