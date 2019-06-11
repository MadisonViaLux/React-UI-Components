import React from 'react';
import './App.scss';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import ButtonColor from "./components/ButtonComponents/style";
import NumberButton from "./components/ButtonComponents/NumberButton"


const App = () => {
  return (
    <div className='theWholeThing'>
      <CalculatorDisplay />

      <div className="row">
        <ActionButton action = "clear"/>
        <ButtonColor text = "÷"/>
      </div>

      <div className="row">
        <NumberButton text = "7"/>
        <NumberButton text = "8"/>
        <NumberButton text = "9"/>
        <ButtonColor text = "X"/>
      </div>

      <div className="row">
        <NumberButton text = "4"/>
        <NumberButton text = "5"/>
        <NumberButton text = "6"/>
        <ButtonColor text = "-"/>
      </div>

      <div className="row">
        <NumberButton text = "1"/>
        <NumberButton text = "2"/>
        <NumberButton text = "3"/>
        <ButtonColor text = "+"/>
      </div>

      <div className="row">
        <ActionButton action = "0"/>
        <ButtonColor text = "="/>
      </div>

    </div>
  );
};

export default App;