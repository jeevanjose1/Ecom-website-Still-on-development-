import { isLogged } from "../../constants/constants";

const initial = { isloading: false };
export const isLoggedin = (state = initial, action) => {
  switch (action.type) {
    case isLogged.CHECKING:
      return {
        ...state,
        isloading: true,
      };
    case isLogged.SUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload,
      };

    case isLogged.FAILED:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
