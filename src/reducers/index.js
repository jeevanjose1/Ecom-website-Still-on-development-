import { combineReducers } from "redux";
import { detialsReducer } from "./accountDetials/detialsReducer";
import { isLoggedin } from "./authReducers/isLoggedin";
import { signinReducer } from "./authReducers/signIn";
import { signupReducer } from "./authReducers/signUp";
import Util from "./utilReducer";
import { addCatogeries } from "./catogeryReducer/addCatgery";
import { getCatogeries } from "./catogeryReducer/getCatogery";
import { deleteCatogeries } from "./catogeryReducer/deleteCatogery";
import { updateCatogery } from "../constants/constants";
import { addProducts } from "./productReducers/addProduct";

const rootReducer = combineReducers({
  Util,
  signupReducer,
  signinReducer,
  isLoggedin,
  detialsReducer,
  addCatogeries,
  getCatogeries,
  deleteCatogeries,
  updateCatogery,
  addProducts,
});
export default rootReducer;
