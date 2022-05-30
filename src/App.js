import React from "react";
import GlobalStyle from "./globalStyles.";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import MainHeader from "./components/header/MainHeader";
import Index from "./routes";

const App = () => {
  return (
    <AppStyles>
      <GlobalStyle />
      <Router>
        <Sidebar />
        <div className="container">
          <MainHeader />
          <div className="pages">
            <Index />
          </div>
        </div>
      </Router>
    </AppStyles>
  );
};

const AppStyles = styled.div`
  display: flex;

  height: 100%;
  .container {
    flex: 4;
  }
`;

export default App;
