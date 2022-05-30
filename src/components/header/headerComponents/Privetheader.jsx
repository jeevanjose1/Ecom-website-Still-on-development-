import React, { useState } from "react";

import styled from "styled-components";

import {
  Search,
  NightsStay,
  WbSunny,
  Notifications,
  Menu,
} from "@mui/icons-material/";
import { mediaQueries } from "../../../helper/mediaQuries";
import { useDispatch } from "react-redux";
import { Active } from "../../../actions/utilAction";
import { HeaderstylePrivet, MenuSection } from "./headerStyles";
const PrivetHeader = () => {
  const [active, Setactive] = useState(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(Active());
  };

  return (
    <HeaderstylePrivet>
      <div className="nav-bar">
        <div onClick={handleClick} className="ham-menu">
          <div className="ham-menu-icon">
            <Menu fontSize="large" />
          </div>
        </div>
        <div className="search">
          <form className="form-controler">
            <input className="form-input" type="text" placeholder="search" />
            <button className="form-btn">
              <Search color="white" fontSize="large" />
            </button>
          </form>
        </div>

        <MenuSection>
          <ul className="menu-list">
            <li className="list-item">
              <button className="night-mod">
                <NightsStay fontSize="large" />
                {/* <WbSunny fontSize="large" /> */}
              </button>
            </li>
            <li className="list-item">
              <button className="notification">
                <Notifications fontSize="large" />
              </button>
            </li>
            <li className="list-item">
              <div className="profile">
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </MenuSection>
      </div>
      <div className="search-small">
        <form className="form-controler">
          <input className="form-input" type="text" placeholder="search" />
          <button className="form-btn">
            <Search color="white" fontSize="large" />
          </button>
        </form>
      </div>
    </HeaderstylePrivet>
  );
};

export default PrivetHeader;
