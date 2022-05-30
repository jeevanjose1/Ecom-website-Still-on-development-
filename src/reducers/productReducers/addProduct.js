import { addProduct } from "../../constants/constants";
const init = {
  isloading: false,
};

export const addProducts = (state = init, action) => {
  switch (action.type) {
    case addProduct.PRODUCTADDING:
      return {
        ...state,
        isloading: true,
      };

    case addProduct.PRODUCTADDINGSUCCESS:
      return {
        ...state,
        payload: action.payload,
        isloading: false,
      };
    case addProduct.PRODUCTADDINGFAILD:
      return {
        ...state,
        payload: action.payload,
        isloading: false,
      };

    default:
      return state;
  }
};
