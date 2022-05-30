import React from "react";
import TransactionDetials from "./transactionComponents/transactionDetials/TransactionDetials";
import Transactions from "./transactionComponents/transactions/Transactions";
import {
  Container,
  Title,
  TransactionsContainer,
  TransactionStyle,
} from "./transactionStyle";

const Transaction = () => {
  return (
    <TransactionStyle>
      <Container>
        <Title>
          <h1>Transactions</h1>
        </Title>

        <TransactionsContainer>
          <Transactions />
          <TransactionDetials />
        </TransactionsContainer>
      </Container>
    </TransactionStyle>
  );
};

export default Transaction;
