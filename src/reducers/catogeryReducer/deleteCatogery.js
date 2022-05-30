import { deleteCatogery } from "../../constants/constants";

const initial = { isloading: false };
export const deleteCatogeries = (state = initial, action) => {
  switch (action.type) {
    case deleteCatogery.DELETING:
      return {
        ...state,
        isloading: true,
      };
    case deleteCatogery.DELETESUCCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload,
      };

    case deleteCatogery.DELETEFAILD:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
