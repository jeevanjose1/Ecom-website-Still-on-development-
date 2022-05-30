import { Menu } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { DropdownStyle } from "./dropdown";

const Dropdown = ({ options }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <DropdownStyle>
      <div className="ham-menu">
        <Menu onClick={handleClick} fontSize="large" />
      </div>
      <div className="menu">
        <ul
          style={active ? { display: "block" } : { display: "none" }}
          click={active}
        >
          {options.map((option, index) => {
            return (
              <li key={index}>
                <a href={option.link}>{option.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </DropdownStyle>
  );
};

export default Dropdown;
