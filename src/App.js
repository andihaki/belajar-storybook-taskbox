import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import TaskList from "./components/TaskList";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskList />
      </Provider>
    );
  }
}

export default App;
