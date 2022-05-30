import React from "react";
import { AddCatogeryStyle } from "./addCatogeryStyles.js";

const AddCatogery = () => {
  return (
    <AddCatogeryStyle>
      <form className="form" action="">
        <div className="form-group name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="type here" />
        </div>
        <div className="form-group Slug">
          <label htmlFor="Slug">Slug</label>
          <input type="text" id="Slug" placeholder="type here" />
        </div>
        <div className="form-group parrent-catogery">
          <label htmlFor="parrent">Parrent</label>
          <select name="" id="parrents">
            <option value="">parrents</option>
          </select>
        </div>
        <div className="form-group description">
          <label htmlFor="Description">Description</label>
          <textarea id="Description" placeholder="type here" />
        </div>
        <div className="btn">
          <button>Create Catogery</button>
        </div>
      </form>
    </AddCatogeryStyle>
  );
};

export default AddCatogery;
