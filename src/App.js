import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AddScreen, ListScreen } from "./Screen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ListScreen} />
        <Route path="/add" component={AddScreen} />
      </Switch>
    </Router>
  );
}

export default App;
