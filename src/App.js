import React, { Component } from "react";
import "./App.css";
import TourList from "./components/TourList/TourList";
import Navbar from "./components/Navbar/Navbar";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TourList />
      </>
    );
  }
}

export default App;
