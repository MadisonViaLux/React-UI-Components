import React from 'react';
import './App.scss';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton"


const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <div className="row1">
        <ActionButton action = "clear"/>
        <NumberButton text = "÷"/>
      </div>
      <div className="row2">
        <NumberButton text = "7"/>
        <NumberButton text = "8"/>
        <NumberButton text = "9"/>
        <NumberButton text = "X"/>
      </div>
      <div className="row3">
        <NumberButton text = "4"/>
        <NumberButton text = "5"/>
        <NumberButton text = "6"/>
        <NumberButton text = "-"/>
      </div>
      <div className="row4">
        <NumberButton text = "1"/>
        <NumberButton text = "2"/>
        <NumberButton text = "3"/>
        <NumberButton text = "+"/>
      </div>
      <div className="row5">
        <ActionButton action = "0"/>
        <NumberButton text = "="/>
      </div>
    </div>
  );
};

export default App;