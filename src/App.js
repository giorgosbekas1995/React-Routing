import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tropical from "./components/pages/Tropical";
import Sahara from "./components/pages/Sahara";
import Waterfall from "./components/pages/Waterfall";
import NewYork from "./components/pages/NewYork";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tropical" component={Tropical} />
          <Route exact path="/waterfall" component={Waterfall} />
          <Route exact path="/sahara" component={Sahara} />
          <Route exact path="/newyork" component={NewYork} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
