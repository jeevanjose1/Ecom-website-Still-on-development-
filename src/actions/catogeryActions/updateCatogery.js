import axios from "axios";
import { updateCatogery } from "../../constants/constants";

export const updateCatogeries = (data) => async (dispatch) => {
  dispatch({ type: updateCatogery.UPDATING });
  try {
    const Data = await axios.put(
      "http://localhost:3001/api/catogery/updatecatogery/",
      data,
      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );

    dispatch({
      type: updateCatogery.UPDATESUCCESS,
      payload: Data.data,
    });
  } catch (error) {
    dispatch({
      type: updateCatogery.UPDATEFAILD,
      payload: { error: error.response },
    });
  }
};
