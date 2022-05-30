import { accUpdate } from "../../constants/constants";

const initial = { isloading: false };
export const detialsReducer = (state = initial, action) => {
  switch (action.type) {
    case accUpdate.UPDATING:
      return {
        ...state,
        isloading: true,
      };
    case accUpdate.UPDATESUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload,
      };

    case accUpdate.UPDATEFAILD:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
