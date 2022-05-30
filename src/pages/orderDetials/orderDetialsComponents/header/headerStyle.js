import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  .date-id {
    h3 {
      font-size: var(--font-size-xlarge);
      font-weight: var(--font-weight-medium);
      display: flex;
      align-items: center;
      span {
        margin-right: 1rem;
      }
    }

    .id {
      font-size: var(--font-size-large);
      opacity: 0.5;
    }
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 60%;
    select {
      padding: 1rem;
      width: 50%;
    }
    button {
      padding: 1.1rem;
      margin: 0 1.2rem;
    }
    .print {
      background-color: var(--primary);
      display: grid;
      place-items: center;
      padding: 1rem;
      border-radius: 0.6rem;
      color: var(--default);
    }
  }
`;
