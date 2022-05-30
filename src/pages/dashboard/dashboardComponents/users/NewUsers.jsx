import React from "react";
import { NewUser, UserContainer } from "./newUsersStyle";
import User from "./userComponents/User";

const NewUsers = () => {
  return (
    <NewUser>
      <UserContainer>
        <User />
      </UserContainer>
    </NewUser>
  );
};

export default NewUsers;
