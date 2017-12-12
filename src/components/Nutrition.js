import React, { Component } from 'react';
import './Nutrition.css';

const Nutrition = (props) => {
    return (
        <div className='nutrition'>
            <span className='attribute'>{props.calories} kcal</span>
            <span className='attribute'>{props.fat} Fat</span>
            <span className='attribute'>{props.carbs} Carbs</span>
            <span className='attribute'>{props.protein} Protein</span>
        </div>
    );
}

export default Nutrition;