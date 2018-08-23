import React, { Component } from 'react';
import Category from './pages/Category'
import Login from './components/Login'
import Product from './pages/Product'
import ListProduct from './pages/ListProduct'
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
        </Switch>
      </Router>
    );
  }
}

export default App;