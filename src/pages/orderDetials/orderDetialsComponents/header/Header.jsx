import React from "react";
import { Print, DateRange } from "@mui/icons-material";
import { HeaderContainer } from "./headerStyle";
const Header = () => {
  return (
    <HeaderContainer>
      <div className="date-id">
        <h3>
          <span>
            <DateRange sx={{ fontSize: 30 }} />
          </span>
          Wed, Aug 13, 2020, 4:34PM
        </h3>
        <h3 className="id">Order ID : #12345</h3>
      </div>

      <div className="status">
        <select name="" id="">
          <option value="">Change status</option>
        </select>

        <button>Save</button>
        <div className="print">
          <Print fontSize="large" />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
