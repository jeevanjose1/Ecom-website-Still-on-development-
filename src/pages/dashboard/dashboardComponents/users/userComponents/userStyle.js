import styled from "styled-components";
export const UserStyle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  font-size: 1.2rem;
  padding: 1.5rem;
  color: var(--default);

  .name {
    font-weight: var(--font-weight-light);
  }
  .email {
    font-weight: var(--font-weight-light);
  }
  .date {
    font-weight: var(--font-weight-light);
  }
`;
