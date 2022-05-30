import axios from "axios";
import { login } from "../../constants/constants";

export const signinAction = (data) => async (dispatch) => {
  dispatch({ type: login.LOGIGNG });
  try {
    const userData = await axios.post(
      "http://localhost:3001/api/admin/signin",
      data,
      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );

    dispatch({
      type: login.LOGINSUCCESS,
      payload: {
        user: {
          userID: userData.data._id,
        },
      },
    });
    localStorage.setItem("UID", userData.data._id);

    window.location.assign("/");
  } catch (error) {
    dispatch({
      type: login.LOGINFAILED,
      payload: { error: error.response },
    });
  }
};
