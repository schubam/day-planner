import React from 'react';
import './Card.css';
import Nutrition from './Nutrition';

const Card = (props) => {
    return (
    <div className='card'>
        <div className='title'>{props.title}</div>
        <Nutrition {...props}/>
    </div>
    );
}

export default Card;