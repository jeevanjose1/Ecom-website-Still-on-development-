import styled from "styled-components";

export const SingleOrderStyle = styled.div``;
export const Container = styled.div``;
export const Order = styled.div`
  padding: 1.5rem;
  display: flex;
  span {
    font-size: var(--font-size-xlarge);
  }
  .id {
    flex: 0.1;
  }
  .customer-name {
    flex: 0.3;
  }
  .status {
    flex: 0.25;
  }
  .date {
    flex: 0.2;
  }
  .price {
    flex: 0.2;
  }
  .action {
    flex: 0.2;
    display: flex;
    justify-content: flex-end;
  }
`;
