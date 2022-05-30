import React from "react";
import DetialsSection from "./userComponents/detialsSection/DetialsSection.jsx";
import UserSection from "./userComponents/usersSection/UserSection.jsx";
import { Container, Title, UserContainer, UserStyle } from "./userStyle";

const Users = () => {
  return (
    <UserStyle>
      <Container>
        <Title>
          <h1>Users</h1>
        </Title>
        <UserContainer>
          <UserSection />
          <DetialsSection />
        </UserContainer>
      </Container>
    </UserStyle>
  );
};

export default Users;
