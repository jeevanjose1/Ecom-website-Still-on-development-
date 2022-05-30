import { creatingAccount } from "../../constants/constants";

const initial = { isloading: false };
export const signupReducer = (state = initial, action) => {
  switch (action.type) {
    case creatingAccount.CREATINGACC:
      return {
        ...state,
        isloading: true,
      };
    case creatingAccount.CREATINGACCSUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload.userdata,
      };
    case creatingAccount.CREATINGACCFAILED:
      return {
        ...state,
        isloading: false,
        payload: action.payload.error,
      };

    default:
      return state;
  }
};
