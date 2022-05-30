import axios from "axios";
import { addProduct } from "../../constants/constants";

export const addProducts = (data) => async (dispatch) => {
  dispatch({ type: addProduct.PRODUCTADDING });

  try {
    const productData = await axios.post(
      "http://localhost:3001/api/product/createproduct",
      data,
      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );

    dispatch({
      type: addProduct.PRODUCTADDINGSUCCESS,
      payload: productData.data,
    });
  } catch (error) {
    dispatch({
      type: addProduct.PRODUCTADDINGFAILD,
      payload: error.response.data,
    });
    console.clear();
  }
};
