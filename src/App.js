import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row"></div>
        <Nav />
      </div>
    );
  }
}

export default App;
