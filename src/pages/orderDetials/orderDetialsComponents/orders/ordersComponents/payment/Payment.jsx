import React from "react";
import { PaymentContainer } from "./paymentStyle";

const Payment = () => {
  return (
    <PaymentContainer>
      <h3>Payment info</h3>
      <div className="detials">
        <p>
          <img
            src="https://www.ecommerce-admin.com/demo/images/card-brands/2.png"
            alt=""
          />
          Master Card **** **** 4768
        </p>
        <p>Business name: Grand Market LLC</p>
        <p>Phone: +1 (800) 555-154-52 </p>
      </div>
    </PaymentContainer>
  );
};

export default Payment;
