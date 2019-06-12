import React from 'react';
import './App.scss';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import Style from "./components/ButtonComponents/style";
import NumberButton from "./components/ButtonComponents/NumberButton"



const ColorStyle = {
  "normal": "white-numbers key-numbers",
  "notNormal": "red-numbers key-numbers",
  "thiccButton": "thicc-button key-numbers"
};



const App = () => {
  return (
    <div className='theWholeThing'>
      <CalculatorDisplay />

      <div className="row">
        <ActionButton action = "clear" style={ColorStyle.thiccButton}/>
        <NumberButton text = "÷" style={ColorStyle.notNormal}/>
      </div>

      <div className="row">
        <NumberButton text="7" style={ColorStyle.normal}/>
        <NumberButton text = "8" style={ColorStyle.normal}/>
        <NumberButton text = "9" style={ColorStyle.normal}/>
        <NumberButton text = "X" style={ColorStyle.notNormal}/>
      </div>

      <div className="row">
        <NumberButton text = "4" style={ColorStyle.normal}/>
        <NumberButton text = "5" style={ColorStyle.normal}/>
        <NumberButton text = "6" style={ColorStyle.normal}/>
        <NumberButton text = "-" style={ColorStyle.notNormal}/>
      </div>

      <div className="row">
        <NumberButton text = "1" style={ColorStyle.normal}/>
        <NumberButton text = "2" style={ColorStyle.normal}/>
        <NumberButton text = "3" style={ColorStyle.normal}/>
        <NumberButton text = "+" style={ColorStyle.notNormal}/>
      </div>

      <div className="row">
        <ActionButton action = "0" style={ColorStyle.thiccButton}/>
        <NumberButton text = "=" style={ColorStyle.notNormal}/>
      </div>

    </div>
  );
};

export default App;