import React from "react";
import { isAuthenticated } from "../auth/auth";
import PrivetHeader from "./headerComponents/Privetheader.jsx";
import PublicHeader from "./headerComponents/PublicHeader.jsx";

const MainHeader = () => {
  if (isAuthenticated()) {
    return <PrivetHeader />;
  } else {
    return <PublicHeader />;
  }
};

export default MainHeader;
