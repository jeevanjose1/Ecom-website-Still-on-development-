import React from "react";
import { SingleTransactionsStyle } from "./singleatransaction";

const SingleTransaction = () => {
  return (
    <SingleTransactionsStyle>
      <td>#123456789</td>
      <td>$100</td>
      <td>
        <div className="icon-text">
          <img
            src="https://www.ecommerce-admin.com/demo/images/card-brands/1.png"
            alt=""
          />
          <span>
            <p>Visa</p>
          </span>
        </div>
      </td>
      <td>12/12/2020</td>
    </SingleTransactionsStyle>
  );
};

export default SingleTransaction;
