import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./Components/Nav";
import MarketPlace from "./Components/MarketPlace";
import SigninScreen from "./Components/SigninScreen";


function App() {
  return (
      <Provider store={store}>
    <Router >
      <Route exact path="/">
        <Redirect to="/MarketPlace" />
      </Route>
      <Route component={Nav} />
      <Route path="/MarketPlace" exact component={MarketPlace}/>
      <Route path="/signin" component={SigninScreen} />
    </Router>
      </Provider>
  );
}

export default App;