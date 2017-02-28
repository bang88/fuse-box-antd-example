import * as React from "react";
import { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
// antd stuff
import { Button, message } from "antd";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <div className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
          <div>
            <Button
              type="primary"
              onClick={() => message.success("Hi there !")}
            >
              I am a Button.
            </Button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
