import axios from "axios";
import { accUpdate } from "../../constants/constants";

export const detialsAction = (data) => async (dispatch) => {
  dispatch({ type: accUpdate.UPDATING });
  try {
    const userData = await axios.post(
      "http://localhost:3001/api/admin/update",
      data,
      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );

    dispatch({
      type: accUpdate.UPDATESUCCESS,
      payload: userData.data,
    });
  } catch (error) {
    dispatch({
      type: accUpdate.UPDATEFAILD,
      payload: { error: error.response },
    });
  }
};
