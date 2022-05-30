import React from "react";
import Cards from "./dashboardComponents/cards/Cards";
import Chart from "./dashboardComponents/chart/Chart";
import Tables from "./dashboardComponents/table/Tables.jsx";
import NewUsers from "./dashboardComponents/users/NewUsers.jsx";

import {
  DashboardStyle,
  Container,
  Header,
  SectionOne,
  SectionTwo,
  SectionThree,
  Graph,
  Users,
  TableContainer,
} from "./dashboardStyle";

const Dashboard = () => {
  return (
    <DashboardStyle>
      <Container>
        <Header>
          <h1 className="title">Dashboard</h1>
        </Header>
        <SectionOne>
          <Cards title="Total Sales" />
          <Cards title="Total Sales" />
          <Cards title="Total Sales" />
        </SectionOne>
        <SectionTwo>
          <Graph>
            <h1 className="title">Sale Statistics</h1>
            <Chart />
          </Graph>

          <Users>
            <h1 className="title">New Users</h1>
            <NewUsers />
            <NewUsers />
            <NewUsers />
            <NewUsers />

            <button className="more-btn">More</button>
          </Users>
        </SectionTwo>
        <SectionThree>
          <TableContainer>
            <h1 className="title">Latest orders</h1>
            <Tables />
          </TableContainer>
        </SectionThree>
      </Container>
    </DashboardStyle>
  );
};

export default Dashboard;
