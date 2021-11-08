import styled from "styled-components";
import React, { useState } from "react";
// Logic and components for the Arithmetic Mean Formula
const Button = styled.button`
  width: 85px;
  height: 30px;

  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: -2px 3px 6px -1px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  margin-top: 30px;

  &:hover {
    background-color: #fdfdfd;
  }
  &:active {
    background-color: wheat;
  }
`;
const MeanWrapper = styled.div`
  height: 100%;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;

  & p {
    font-size: 16px;
    text-align: center;
  }

  & input {
    /* Rectangle 65 */

    width: 209px;
    height: 36px;

    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
  }

  & .answer {
    color: white;

    font-size: 18px;
  }
  & .answer--box {
    /* Rectangle 64 */
    width: 142px;
    height: 47px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
      color: black;
      text-align: center;
      font-size: 20px;
    }
  }
`;
const ArithmeticMean = (props) => {
  const [mean, setMean] = useState("");
  const [arr, setArr] = useState([1, 2]);
  const [value, setValue] = useState("");

  const meanHandler = function (event) {
    setValue(event.target.value);
    console.log(value);
    setArr(value.split(",").map(Number));
    console.log(arr);
  };
  const calculateHandler = function () {
    setMean(arr.reduce((a, b) => a + b) / arr.length);
  };
  return (
    <MeanWrapper>
      <p className="header">
        Input all of the given values seperated by comma (“ , “)
      </p>
      <input
        onChange={meanHandler}
        type="text"
        className="input"
        placeholder="Input all the number"
      ></input>
      <Button onClick={calculateHandler}>Calculate</Button>
      <p className="answer"> Arithmetic Mean = </p>
      <div className="answer--box">
        <p> {mean}</p>
      </div>
    </MeanWrapper>
  );
};

export default ArithmeticMean;
