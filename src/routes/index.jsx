import React from "react";
import { Switch } from "react-router";
import PrivateRoute from "../helper/PrivetRoute";
import AddProducts from "../pages/addProducts/AddProducts";
import Catogeries from "../pages/catogeries/Catogeries.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import OrderDetials from "../pages/orderDetials/OrderDetials.jsx";
import Orders from "../pages/orders/Orders.jsx";
import ProductList from "../pages/products/ProductList.jsx";
import Transaction from "../pages/transaction/Transaction.jsx";
import Users from "../pages/users/Users";
import adminlogin from "../pages/login/adminlog";

const Index = () => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/product-list" component={ProductList} />
      <PrivateRoute path="/Catogeries" component={Catogeries} />
      <PrivateRoute path="/orders" component={Orders} />
      <PrivateRoute path="/o-detials" component={OrderDetials} />
      <PrivateRoute path="/add-product" component={AddProducts} />
      <PrivateRoute path="/transaction" component={Transaction} />
      <PrivateRoute path="/users" component={Users} />
      <PrivateRoute path="/sign-in" component={adminlogin} />
    </Switch>
  );
};

export default Index;
