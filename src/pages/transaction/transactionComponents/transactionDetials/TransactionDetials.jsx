import React from "react";
import {
  Container,
  TransactionDetialsContainer,
} from "./transactionDetialsStyle";

const TransactionDetials = () => {
  return (
    <TransactionDetialsContainer>
      <Container>
        <h2>Transaction Details</h2>

        <div className="detials">
          <div className="date mgb">
            <h3>Date:</h3>
            <p>December 19th, 2020</p>
          </div>
          <div className="address mgb">
            <h3>Billing address:</h3>
            <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          </div>
          <div className="vat mgb">
            <h3>VAT ID:</h3>
            <p>54741654160</p>
          </div>
          <div className="email mgb">
            <h3>Email:</h3>
            <p>support@example.com</p>
          </div>
          <div className="items mgb">
            <h3>Item purchased:</h3>
            <a href="">products</a>
            <a href="">products</a>
          </div>
          <div className="payment mgb">
            <h3>Payment:</h3>
            <p>PayPal</p>
          </div>
          <div className="total mgb">
            <h4>$424</h4>
          </div>

          <div className="reciept">
            <button>Download Reciept</button>
          </div>
        </div>
      </Container>
    </TransactionDetialsContainer>
  );
};

export default TransactionDetials;
