import React, { Component } from 'react';
import './Card.css';

const Card = (props) => {
    return (
    <div className='card'>
        <div className='title'>{props.title}</div>
        <div className='nutrition'>
            <span className='attribute'>{props.calories} kcal</span>
            <span className='attribute'>{props.fat} Fat</span>
            <span className='attribute'>{props.carbs} Carbs</span>
            <span className='attribute'>{props.protein} Protein</span>
        </div>
    </div>
    );
}

export default Card;