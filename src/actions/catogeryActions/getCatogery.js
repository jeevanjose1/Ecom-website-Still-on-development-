import axios from "axios";
import { getCatogery } from "../../constants/constants";

export const getCatogeries = () => async (dispatch) => {
  dispatch({ type: getCatogery.GETING });
  try {
    const Data = await axios.get(
      "http://localhost:3001/api/catogery/catogeries"
    );

    dispatch({
      type: getCatogery.GETCATOGERYSUCESS,
      payload: Data.data,
    });
  } catch (error) {
    dispatch({
      type: getCatogery.GETCATOGERYFAILED,
      payload: { error: error.response },
    });
  }
};
