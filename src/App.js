import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Divider from "./components/Divider";
import Header from "./components/Header";
import Search from "./components/Search";

function App(props) {
  return (
    <div className="App">
      <Divider></Divider>
      <Header></Header>
      <Divider></Divider>
      <Search />
    </div>
  );
}

export default App;
