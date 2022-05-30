import styled from "styled-components";

export const AddCatogeryStyle = styled.div`
  width: 100%;
  .form {
    .form-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 2.4rem;
      input {
        width: 100%;
        padding: 0.8rem 1.2rem;
      }
      textarea {
        width: 100%;
        padding: 0.8rem 1.2rem;
        resize: vertical;
        height: 10rem;
      }
      label {
        font-size: var(--font-size-xxlarge);
        margin-bottom: 0.5rem;
      }

      select {
        width: 100%;
        padding: 0.8rem 1.2rem;
      }
    }
    .btn {
      button {
        width: 100%;
        padding: 0.8rem 1.2rem;
      }
    }
  }
`;
