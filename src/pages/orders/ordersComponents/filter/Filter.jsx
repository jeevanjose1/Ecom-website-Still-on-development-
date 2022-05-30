import React from "react";
import { Container, FilterStyle } from "./filterStyle";
const Filter = () => {
  return (
    <FilterStyle>
      <Container>
        <h1>Filter</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Order ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Order ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Customer Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Order Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Order Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Total</label>
            <input type="text" className="form-control" placeholder="Total" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Filter
            </button>
          </div>
        </form>
      </Container>
    </FilterStyle>
  );
};

export default Filter;
