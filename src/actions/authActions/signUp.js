import axios from "axios";
import { creatingAccount } from "../../constants/constants";

export const signupAction = (data) => async (dispatch) => {
  dispatch({ type: creatingAccount.CREATINGACC });
  try {
    const userData = await axios.post(
      "http://localhost:3001/api/admin/signup",
      data
    );
    dispatch({
      type: creatingAccount.CREATINGACCSUCCESS,
      payload: userData,
    });
    localStorage.setItem("rj", userData.data);
  } catch (error) {
    dispatch({
      type: creatingAccount.CREATINGACCSUCCESS,
      payload: { error: error.response.data.message },
    });
    if (error.response.data.varified === undefined) {
      return;
    } else {
      localStorage.setItem("varified", error.response.data.varified);
    }
  }
};
