import styled from "styled-components";
import React, { useState } from "react";

const FormulaDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  ::placeholder {
    color: black;
  }
  width: 100px;
  margin-bottom: 10px;
`;
const AreaTriangle = (props) => {
  let heightParameter = 0;
  let baseParameter = 0;

  const [height, setHeight] = useState("");
  const [base, setBase] = useState("");
  const [area, setArea] = useState("Answer of Triangle");
  const VariableA = function (event) {
    setHeight(event.target.value);
    heightParameter = height;
  };
  const VariableB = function (event) {
    setBase(event.target.value);
    baseParameter = base;
  };
  const CalculateArea = function () {
    setArea(0.5 * base * height);
  };
  return (
    <FormulaDiv>
      <Input
        onChange={VariableA}
        type="number"
        placeholder="Value of Height"
        value={height}
      ></Input>
      <Input
        onChange={VariableB}
        type="number"
        placeholder="Value of Base"
        value={base}
      ></Input>
      <button onClick={CalculateArea}>Calculate</button>
      <h1>{area}</h1>
    </FormulaDiv>
  );
};

export default AreaTriangle;
