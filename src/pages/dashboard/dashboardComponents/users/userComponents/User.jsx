import React from "react";
import { UserStyle } from "./userStyle";

const User = () => {
  return (
    <UserStyle>
      <h3 className="name">Jeevan</h3>
      <h4 className="email">jeevan@gmail.com</h4>
      <h4 className="date">Joined on: 12/12/2019s</h4>
    </UserStyle>
  );
};

export default User;
