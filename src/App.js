import React from "react";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobile1 from "./Components/Mobile1/Mobile1";
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
      <Route path="/Mobile1" exact component={Mobile1}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
