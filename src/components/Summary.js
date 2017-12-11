import React, { Component } from 'react';
import './Summary.css';

const Summary = (props) => {
    return (
        <div className='summary'>
            <span className='attribute'>{props.calories} kcal</span>
            <span className='attribute'>{props.fat} Fat</span>
            <span className='attribute'>{props.carbs} Carbs</span>
            <span className='attribute'>{props.protein} Protein</span>
        </div>
    );
}

export default Summary;