import React from 'react';
import './Button.scss';



const ButtonColor = props => {
    console.log(props);
    return (
        <div>
            <button className='styleButtons'>{props.text}</button>
        </div>
    );
};

export default ButtonColor;