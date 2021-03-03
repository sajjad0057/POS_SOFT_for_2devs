import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SellComponent from "./components/dynamic/SellComponent";
import Header from "./components/Header";
import PrimaryOptions from "./components/PrimaryOptions";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddProduct from "./components/dynamic/Product/AddProduct";
import ManageProduct from "./components/dynamic/Product/ManageProduct";
const Path = {
  sell:"/sell",
  buy: "/buy",
  product: "/product",
  addproduct: "/addproduct",
  manageproduct: "/manageproduct",
};
const data = {
  mainMenu: [
    { icon: AddIcon, title: "product", path: Path.product },
    { icon: AddIcon, title: "Sell", path: Path.sell },
    { icon: AccessTimeIcon, title: "Buy", path: Path.buy },
  ],

  productMenu: [
    { icon: AddIcon, title: "Add product", path: Path.addproduct },
    { icon: AddIcon, title: "Manage product", path: Path.manageproduct },
    
  ],
};

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path={Path.addproduct}>
            <AddProduct />
          </Route>
          <Route path={Path.manageproduct}>
            <ManageProduct />
          </Route>
          <Route path={Path.product}>
            <PrimaryOptions data={data.productMenu}/>
          </Route>
          <Route path="/sell">
            <SellComponent />
          </Route>
          <Route path="/">
            <PrimaryOptions data={data.mainMenu} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
