import { getCatogery } from "../../constants/constants";

const initial = { isloading: false };
export const getCatogeries = (state = initial, action) => {
  switch (action.type) {
    case getCatogery.GETING:
      return {
        ...state,
        isloading: true,
      };
    case getCatogery.GETCATOGERYSUCESS:
      return {
        ...state,
        isloading: false,
        payload: action.payload,
      };

    case getCatogery.GETCATOGERYFAILED:
      return {
        ...state,
        isloading: false,
        payload: { error: action.payload.error },
      };

    default:
      return state;
  }
};
