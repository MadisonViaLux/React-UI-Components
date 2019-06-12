import React from 'react';
import './Button.scss';


const ActionButton = (props) => {
    return (
        < >
        <button className='actionMess'>{props.action}</button>
        </>
    )
}

export default ActionButton;