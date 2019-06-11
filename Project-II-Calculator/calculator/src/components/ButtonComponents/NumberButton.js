import React from 'react';
import './Button.scss';


const NumberButton = props => {
    console.log(props);
    return (
        < >
        <button>{props.text}</button>
        </>
    );
};

export default NumberButton;