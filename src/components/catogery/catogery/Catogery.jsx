//native import
import React, { useEffect, useState } from "react";

//external import
import { useSelector, useDispatch } from "react-redux";

//internal import
import { getCatogeries } from "../../../actions/catogeryActions/getCatogery";
import List from "./catogeryComponents/EditCatogery.jsx";
import { Products } from "./catogeryStyles";

const Catogery = () => {
  const dispatch = useDispatch();
  const [fupdate, setFupdate] = useState(false);

  useEffect(() => {
    dispatch(getCatogeries());
  }, [dispatch, fupdate]);

  const data = useSelector((state) => state.getCatogeries?.payload);

  return (
    <Products>
      {data?.length > 0 ? (
        <>
          {data?.map((e) => {
            return <List fupdate={fupdate} setFupdate={setFupdate} e={e} />;
          })}
        </>
      ) : (
        <h3>No Catogeries Found</h3>
      )}
    </Products>
  );
};

export default Catogery;
