//native import

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

//external import
import { useDispatch, useSelector, connect } from "react-redux";

//internal import
import { getCatogeries } from "../../../actions/catogeryActions/getCatogery";
import { addProducts } from "../../../actions/productActions/addProducts";
import { style, thumpNail } from "../../../helper/dropZone";
import Dragslider from "../../dragslider";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import { formData, subfilter, mapStateToProps } from "./addProduct";
import {
  AddProduct,
  Drag,
  Firstsection,
  Fourthsection,
  Secondsection,
  Thirdsection,
} from "./addproductstyle";

const Addproduct = (props) => {
  const [files, setFile] = useState();
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatogeries());
  }, [dispatch]);

  const catogeries = useSelector((state) => state?.getCatogeries.payload);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(addProducts(formData(files, data)));
    setData({
      ...data,
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,

    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, /image/PNG, image/jpg",
  });

  useEffect(() => {
    files?.forEach((file) => {
      URL.revokeObjectURL(file.preview);
    });
  }, [files]);

  return (
    <AddProduct>
      <form>
        <Firstsection>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="title"
            required
          />
          <select
            onChange={handleChange}
            name="catogery"
            id="catogeries"
            placeholder="Catogeries"
          >
            <option value="0" className="hidden">
              Catogeries
            </option>
            {catogeries?.map((cat) => {
              return <option value={cat._id}>{cat.name}</option>;
            })}
          </select>
          {subfilter(data?.catogery, catogeries, handleChange)}
        </Firstsection>
        <Secondsection>
          <textarea
            name="discription"
            placeholder="Product Detials"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <textarea
            name="basicPrepration"
            placeholder="Basic Prepration"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <textarea
            name="storage"
            placeholder="Storage / Handling"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </Secondsection>
        <Thirdsection>
          <div className="first">
            <input
              onChange={handleChange}
              name="price"
              type="number"
              placeholder="Price"
            />
            <input
              onChange={handleChange}
              name="offerPrice"
              type="number"
              placeholder="Offer Price"
            />
          </div>
          <div className="second">
            <input
              onChange={handleChange}
              name="countInStock"
              type="number"
              placeholder="Stocks"
            />
            <select onChange={handleChange} name="isFeature">
              <option value="0" className="hidden">
                feature
              </option>
              <option value={true} className="option">
                Yes
              </option>
              <option value={false} className="option">
                No
              </option>
            </select>
          </div>
        </Thirdsection>
        <Fourthsection>
          <Drag
            {...getRootProps()}
            style={style(isDragActive, isDragAccept, isDragReject)}
          >
            <input name="image" {...getInputProps()} />

            <p>Drag 'n' drop some files here, or click to select files</p>
          </Drag>
          <Dragslider thumbs={thumpNail(files)} />
        </Fourthsection>
        <div className="btn">
          <button onClick={handleSumit}>Add Product</button>
          {props?.isLoading && <LoadingSpinner />}
          {props.success && !props.isLoading && <h2>{props.success}</h2>}
        </div>
      </form>
    </AddProduct>
  );
};

export default connect(mapStateToProps)(Addproduct);
