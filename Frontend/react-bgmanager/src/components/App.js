import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" />
        </Router>
      </div>
    );
  }
}
