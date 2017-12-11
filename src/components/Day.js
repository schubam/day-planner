import React, { Component } from 'react';
import './Day.css'
import Card from './Card'
import Summary from './Summary'

const breakfast = {
    title: "Porridge",
    calories: 243,
    fat: 12,
    carbs: 245,
    protein: 25
};

const lunch = {
    title: "Chicken with Brokkoli",
    calories: 423,
    fat: 21,
    carbs: 45,
    protein: 125
};

const dinner = {
    title: "Chickpea-Curry",
    calories: 379,
    fat: 12,
    carbs: 45,
    protein: 52
};

class Day extends React.Component {
    render(props) {
        return (
            <div className='day'>
                <div className='title'>Monday 18.12.2017</div>
                <Card {...breakfast} />
                <Card {...lunch} />
                <Card {...dinner} />
                <Summary {...dinner}/>
            </div>
        );
    }
}

export default Day;