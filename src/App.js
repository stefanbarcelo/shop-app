import React from "react";
import "./main.scss";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  );
}

export default App;
