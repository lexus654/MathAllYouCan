import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Divider from "../src/components/dumbComponents/Divider";
import Header from "../src/components/dumbComponents/Header";
import Search from "../src/components/logic/Search";

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
