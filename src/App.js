import React, { Component } from 'react';
import Category from './pages/Category'
import Login from './components/Login'
import Product from './pages/Product'
import ListProduct from './pages/ListProduct'
import Listkurir from './pages/Listkurir'
import Sliporder from './pages/PrintSliporder'
import PrintInvoice from './pages/PrintInvoice';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/category" component={Category} />
          <Route  exact path="/login" component={Login} />
          <Route  exact path="/form" component={Product} />
          <Route  exact path="/list" component={ListProduct} />
          <Route exact path="/kurir" component={Listkurir} />
          <Route exact path="/sliporder" component={Sliporder} />
          <Route exact path="/invoice" component={PrintInvoice} />
        </Switch>
      </Router>
    );
  }
}

export default App;