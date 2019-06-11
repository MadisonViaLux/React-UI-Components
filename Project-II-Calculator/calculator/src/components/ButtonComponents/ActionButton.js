import React from 'react';
import './Button.scss';


const ActionButton = (props) => {
    return (
        < >
        <button>{props.action}</button>
        </>
    )
}

export default ActionButton;