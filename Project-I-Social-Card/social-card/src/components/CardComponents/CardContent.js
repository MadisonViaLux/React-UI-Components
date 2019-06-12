import React from 'react';
import './Card.css';


const CardContent = () => {
    return (
        <div className='shouldntBeTakingThisLong'>
            <h3>Get Started With React</h3>
            <p>React makes it painless to create interactive UIs. Design simple 
                views for each state in your application.</p>
            <p className='TurnMeGray'>reactjs.org</p>
        </div>
    );
};

export default CardContent;