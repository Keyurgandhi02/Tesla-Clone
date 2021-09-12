import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./pages/Auth";
import SModel from "./pages/SModel";

function App() {
  const authData = useSelector((state) => state.auth.token);
  const userIsLoggedIn = !!authData;

  return (
    <div className="App">
      <Helmet>
        <link rel="icon" href="../public/images/favicon.ico" />
        <title>Tesla</title>
      </Helmet>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="/models/:modelId">
          {userIsLoggedIn && <SModel></SModel>}
          {!userIsLoggedIn && <Redirect to="/account"></Redirect>}
        </Route>
        <Route path="/account">
          <Auth></Auth>
        </Route>
        <Route path="*">
          <p>page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
