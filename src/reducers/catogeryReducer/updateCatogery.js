import { updateCatogery } from "../../constants/constants";

const initial = { isloading: false };
export const updateCatogeries = (state = initial, action) => {
  switch (action.type) {
    case updateCatogery.UPDATING:
      return {
        ...state,
        isloading: true,
      };
    case updateCatogery.UPDATESUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload,
      };

    case updateCatogery.UPDATEFAILD:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
