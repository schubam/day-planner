import React, { Component } from 'react';
import './Day.css'
import Card from './Card'
import Nutrition from './Nutrition'
import Remote from './Remote'

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.breakfast = {
            title: "Porridge",
            calories: 243,
            fat: 12,
            carbs: 245,
            protein: 25
        };
        this.lunch = {
            title: "Chicken with Brokkoli",
            calories: 423,
            fat: 21,
            carbs: 45,
            protein: 125
        };
        this.dinner = {
            title: "Chickpea-Curry",
            calories: 379,
            fat: 12,
            carbs: 45,
            protein: 52
        };
        this.calculateSum = function(field) {
            const meals = [this.breakfast[field], this.lunch[field], this.dinner[field]];
            return meals.reduce((a,b) => a+b, 0)
        };
    }

    sumOfNutrition() {
        return {
            calories: this.calculateSum("calories"),
            fat: this.calculateSum("fat"),
            carbs: this.calculateSum("carbs"),
            protein: this.calculateSum("protein"),
        };
    }

    render(props) {
        return (
            <div className='day-container'>
                <div className='title'>Monday 18.12.2017</div>
                <Remote />
                <Card {...this.breakfast} />
                <Card {...this.lunch} />
                <Card {...this.dinner} />
                <Nutrition {...this.sumOfNutrition() } />
            </div>
        );
    }
}

export default Day;