import React from "react";
import {
  AddProductContainer,
  AddProductStyle,
  Button,
  Catogery,
  GeneralInfo,
  Media,
  Pricing,
  Stocks,
  Title,
} from "./addProductStyle";

const AddProducts = () => {
  return (
    <AddProductStyle>
      <Title>
        <h1>Add product</h1>
      </Title>
      <AddProductContainer>
        <GeneralInfo className="flex">
          <div className="title ">
            <h2>1. General info</h2>
          </div>
          <div className="generalInfo width">
            <form action="">
              <div className="form-group">
                <label htmlFor="">Product name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Description</label>
                <textarea placeholder="Type here" />
              </div>
            </form>
          </div>
        </GeneralInfo>
        <Pricing className="flex">
          <div className="title">
            <h2>2. Pricing</h2>
          </div>
          <div className="pricing width">
            <form action="">
              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="00.0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Discount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="00.0"
                />
              </div>
            </form>
          </div>
        </Pricing>
        <Catogery className="flex">
          <div className="title">
            <h2>3. Catogery</h2>
          </div>
          <div className="catogery width">
            <select name="" id="">
              <option value="">Select catogery</option>
              <option value="">Catogery 1</option>
              <option value="">Catogery 2</option>
              <option value="">Catogery 3</option>
            </select>

            <select name="" id="">
              <option value="">Select sub catogery</option>
              <option value="">Catogery 1</option>
              <option value="">Catogery 2</option>
            </select>
          </div>
        </Catogery>
        <Stocks className="flex">
          <div className="title">
            <h2>4. Stocks</h2>
          </div>
          <div className="stock width">
            <form action="">
              <div className="form-group">
                <label htmlFor="">Stock in numbers</label>
                <input type="text" className="form-control" placeholder="00" />
              </div>
            </form>
          </div>
        </Stocks>
        <Media className="flex">
          <div className="title">
            <h2>5s. Media</h2>
          </div>
          <div className="media width">
            <form action="">
              <div className="form-group">
                <label htmlFor="">Images</label>
                <input type="file" className="form-control" />
              </div>
            </form>
          </div>
        </Media>
        <Button>
          <button className="btn">Save</button>
        </Button>
      </AddProductContainer>
    </AddProductStyle>
  );
};

export default AddProducts;
