import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes";

/**
 * Application entry point.
 * Maps provider, store, routes
 *
 * We are using browser router, if hashRouting is preferred then this is where you change.
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
