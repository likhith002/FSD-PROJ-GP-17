import React from "react";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobile from "./Components/Mobile/Mobile";
import Body from "./Components/Body_Home/Body";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Header />
      </div>
      .+
      <Switch>
      <Route path="/" exact component={Body}></Route>
      <Route path="/Mobile" exact component={Mobile}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
