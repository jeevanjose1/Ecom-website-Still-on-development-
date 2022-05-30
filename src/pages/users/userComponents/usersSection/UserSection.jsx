import React from "react";
import SingleUser from "./singleUser/SingleUser";
import { Container, Head, UserSectionStyle } from "./userSectionStyles";

const UserSection = () => {
  return (
    <UserSectionStyle>
      <Container>
        <Head>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>

          <div className="filter">
            <select>
              <option value="">Filter</option>
              <option value="">All</option>
              <option value="">Admin</option>
              <option value="">Customer</option>
            </select>
          </div>
        </Head>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
          </tbody>
        </table>
      </Container>
    </UserSectionStyle>
  );
};

export default UserSection;
