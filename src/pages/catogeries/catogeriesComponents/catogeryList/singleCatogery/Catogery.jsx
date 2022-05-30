import React from "react";
import { CatogeryStyle, Container } from "./CatogeryStyle";
import Dropdown from "../../../../../components/dropdown/Dropdown.jsx";
const Catogery = () => {
  return (
    <CatogeryStyle>
      <Container>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
        <div className="name">
          <span>Men clothes</span>
        </div>
        <div className="description">
          <span>Men clothes</span>
        </div>
        <div className="slug">
          <span>/men </span>
        </div>
        <div className="Action">
          <Dropdown
            options={[
              {
                title: "View detials",
                link: "/view-detials",
              },
              {
                title: "Edit info",
                link: "/edit-info",
              },
              {
                title: "Delete",
                link: "/delete",
              },
            ]}
          />
        </div>
      </Container>
    </CatogeryStyle>
  );
};

export default Catogery;
