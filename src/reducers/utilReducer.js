import { util } from "../constants/constants";

const Util = (state = false, action) => {
  switch (action.type) {
    case util.ACTIVE:
      return !state;
    default:
      return state;
  }
};
export default Util;
