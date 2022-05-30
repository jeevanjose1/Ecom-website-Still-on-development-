//native import
import React, { useEffect, useState } from "react";

//external import
import { useSelector, useDispatch } from "react-redux";

//internal import
import { addCatogeries } from "../../../actions/catogeryActions/addCatogery";
import { getCatogeries } from "../../../actions/catogeryActions/getCatogery";
import { selectMenu } from "./addCatogery";
import { Addcatog } from "./addCatogeryStyles";

const Addcatogery = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [datas, setDatas] = useState(false);
  useEffect(() => {
    dispatch(getCatogeries());
  }, [dispatch, datas]);

  const catogery = useSelector((state) => state?.getCatogeries.payload);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data) {
      dispatch(addCatogeries(data));
      setDatas(!datas);
    }
  };

  return (
    <Addcatog>
      <form action="">
        <div className="first">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Catogery"
          />
          {catogery?.length > 0 ? (
            <select
              name="parentId"
              onChange={handleChange}
              className="dropdown"
              id=""
            >
              <option value="" className="hidden">
                Select Parrent Catogery
              </option>
              {selectMenu(catogery)}
            </select>
          ) : (
            <h3 className="dropdown">No parrent Catogeries</h3>
          )}
        </div>
        <button onClick={handleSubmit} type="submit">
          Add Catogery
        </button>
      </form>
    </Addcatog>
  );
};

export default Addcatogery;
