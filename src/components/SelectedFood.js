import React from 'react';

function sum(foods, prop) {
    return foods.reduce((memo, food) => (
        food[prop] + memo
    ), 0);
}

const SelectedFoods = (props) => {
    const { foods } = props;
    const foodRows = foods.map((food, idx) => (
        <tr
            key={idx}
            onClick={() => props.onFoodClick(idx)}
        >
            <td>{food.title}</td>
            <td>{food.calories}</td>
            <td>{food.fat}</td>
            <td>{food.carbs}</td>
            <td>{food.protein}</td>
        </tr>
    ));

    return (
        <table className='table table-condensed table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>kcal</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                    <th>Protein (g)</th>
                </tr>
            </thead>
            <tbody>
                {foodRows}
            </tbody>
            <tfoot>
        <tr>
          <th>Total</th>
          <th
            className='right aligned'
            id='total-kcal'
          >
            {sum(foods, 'calories')}
          </th>
          <th
            className='right aligned'
            id='total-fat_g'
          >
            {sum(foods, 'fat')}
          </th>
          <th
            className='right aligned'
            id='total-carbohydrate_g'
          >
            {sum(foods, 'carbs')}
          </th>
          <th
            className='right aligned'
            id='total-protein_g'
          >
            {sum(foods, 'protein')}
          </th>
        </tr>
      </tfoot>
        </table>
    );
}

export default SelectedFoods;