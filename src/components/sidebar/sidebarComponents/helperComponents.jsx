import React from "react";
import { Link } from "react-router-dom";
const SubMenu = ({ option, active, setActive, index }) => {
  const handleClickMenu = (value) => {
    setActive(() => {
      if (value === active) {
        return null;
      }
      return value;
    });
  };

  return (
    <li onClick={() => handleClickMenu(index)} className="option">
      <Link className="link" to={option.link}>
        {option.name}
      </Link>
    </li>
  );
};
export default SubMenu;
