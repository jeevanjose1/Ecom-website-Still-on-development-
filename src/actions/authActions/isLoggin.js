import axios from "axios";
import { isLogged } from "../../constants/constants";

export const isLoggedin = () => async (dispatch) => {
  dispatch({ type: isLogged.CHECKING });
  try {
    const userData = await axios.get(
      "http://localhost:3001/api/admin/isloggedin",

      { withCredentials: true, "Access-Control-Allow-Origin": "" }
    );

    dispatch({
      type: isLogged.SUCCESS,
      payload: userData.data,
    });
    localStorage.setItem("UID", userData.data.id);
  } catch (error) {
    dispatch({
      type: isLogged.FAILED,
      payload: { error: error.response },
    });
  }
};
