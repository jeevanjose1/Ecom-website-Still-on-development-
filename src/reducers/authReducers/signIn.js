import { login } from "../../constants/constants";

const initial = { isloading: false };
export const signinReducer = (state = initial, action) => {
  switch (action.type) {
    case login.LOGIGNG:
      return {
        ...state,
        isloading: true,
      };
    case login.LOGINSUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload.user,
      };

    case login.LOGINFAILED:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
