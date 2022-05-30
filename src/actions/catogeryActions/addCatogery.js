import axios from "axios";
import { addCatogery } from "../../constants/constants";

export const addCatogeries = (data) => async (dispatch) => {
  dispatch({ type: addCatogery.ADDIGN });
  try {
    const Data = await axios.post(
      "http://localhost:3001/api/catogery/createcatogery",
      data,
      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );

    dispatch({
      type: addCatogery.ADDIGNSUCCESS,
      payload: Data.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: addCatogery.ADDINGFAILD,
      payload: { error: error.response },
    });
  }
};
