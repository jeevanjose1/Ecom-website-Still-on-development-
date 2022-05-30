import React from "react";
import {
  CatogeryListStyle,
  Head,
  SingleCatogery,
} from "./catogeryListStyle.js";
import Catogery from "./singleCatogery/Catogery.jsx";

const CatogeryList = () => {
  return (
    <CatogeryListStyle>
      <Head>
        <div className="checkbox">
          <input type="checkbox" />
        </div>

        <div className="name">
          <span>Name</span>
        </div>
        <div className="description">
          <span>Description</span>
        </div>
        <div className="slug">
          <span>Slug</span>
        </div>
        <div className="Action">
          <span>Action</span>
        </div>
      </Head>

      <SingleCatogery>
        <Catogery />
      </SingleCatogery>
    </CatogeryListStyle>
  );
};

export default CatogeryList;
