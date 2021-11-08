import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Divider from "../src/components/dumbComponents/Divider";
import Header from "../src/components/dumbComponents/Header";
import Search from "../src/components/logic/Search";
import styled from "styled-components";

function App(props) {
  return (
    <div className="App">
      {/* Divider Js is the design border */}
      <Divider></Divider>
      {/* Header contains the Logo */}
      <Header></Header>
      <Divider></Divider>
      {/* Search contains all the logic as well the code */}
      <Search />
    </div>
  );
}

export default App;
