import { addCatogery } from "../../constants/constants";

const initial = { isloading: false };
export const addCatogeries = (state = initial, action) => {
  switch (action.type) {
    case addCatogery.ADDIGN:
      return {
        ...state,
        isloading: true,
      };
    case addCatogery.ADDIGNSUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload,
      };

    case addCatogery.ADDINGFAILD:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
