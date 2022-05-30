import React from "react";
import SingleTransaction from "./singleTransaction/SingleTransaction.jsx";
import {
  Container,
  Head,
  Pagination,
  TransactionContainer,
  TransactionsStyle,
} from "./transactionsStyle";

const Transactions = () => {
  return (
    <TransactionsStyle>
      <Container>
        <Head>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="sort">
            <select>
              <option value="">Method</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </Head>

        <TransactionContainer>
          <table>
            <thead>
              <tr>
                <th>Transaction ID </th>
                <th>Paid</th>
                <th>Method</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
              <SingleTransaction />
            </tbody>
          </table>
        </TransactionContainer>
        <Pagination>
          <ul>
            <li>
              <button>Previous</button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>Next</button>
            </li>
          </ul>
        </Pagination>
      </Container>
    </TransactionsStyle>
  );
};

export default Transactions;
