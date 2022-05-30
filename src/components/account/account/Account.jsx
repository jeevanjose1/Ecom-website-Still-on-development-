import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { detialsAction } from "../../../actions/accountAction/detialsAction";
import { Acc, First, Second } from "./accountStyle";

const Account = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(detialsAction(data));
  };

  return (
    <Acc>
      <form onChange={handleChange}>
        <First>
          <input name="name" type="text" placeholder="Change Username" />
        </First>
        <Second>
          <input name="oldPassword" type="text" placeholder="Old Passsword" />
          <input name="newPassword" type="text" placeholder="New Password" />
          <input
            name="confirmPassword"
            type="text"
            placeholder="Confirm New Password"
          />
        </Second>
        <button onClick={handlesubmit} type="submit">
          Submit
        </button>
      </form>
    </Acc>
  );
};

export default Account;
