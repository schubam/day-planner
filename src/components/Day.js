import React, { Component } from 'react';
import './Day.css'
import Card from './Card'
import Nutrition from './Nutrition'

class Day extends React.Component {
    constructor(props) {
        super(props);
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
        this.breakfast = breakfast;
        this.lunch = lunch;
        this.dinner = dinner;
    }

    sumOfNutrition() {
        return {
            calories: [this.breakfast.calories, this.lunch.calories, this.dinner.calories].reduce((a,b) => a+b, 0),
            fat: [this.breakfast.fat, this.lunch.fat, this.dinner.fat].reduce((a,b) => a+b, 0),
            carbs: [this.breakfast.carbs, this.lunch.carbs, this.dinner.carbs].reduce((a,b) => a+b, 0),
            protein: [this.breakfast.protein, this.lunch.protein, this.dinner.protein].reduce((a,b) => a+b, 0)
        };
    }

    render(props) {
        return (
            <div className='day-container'>
                <div className='title'>Monday 18.12.2017</div>
                <Card {...this.breakfast} />
                <Card {...this.lunch} />
                <Card {...this.dinner} />
                <Nutrition {...this.sumOfNutrition() } />
            </div>
        );
    }
}

export default Day;