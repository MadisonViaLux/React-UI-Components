import React from 'react';
import './Button.scss';


const NumberButton = props => {
    return (
        < >
        <button className={props.colorStyle}>{props.text}</button>
        </>
    );
};



export default NumberButton;