import axios from "axios";
import { deleteCatogery } from "../../constants/constants";

export const deleteCatogeries = (data, mainRef) => async (dispatch) => {
  dispatch({ type: deleteCatogery.DELETING });
  try {
    const Data = await axios.delete(
      `http://localhost:3001/api/catogery/deletecatogery/${data.id}`,

      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );
    dispatch({
      type: deleteCatogery.DELETESUCCESS,
      payload: Data.data,
    });
  } catch (error) {
    dispatch({
      type: deleteCatogery.DELETEFAILD,
      payload: { error: error.response },
    });
  }
};
