import React from 'react';

function sum(foods, prop) {
    return foods.reduce((memo, food) => (
        food[prop] + memo
    ), 0);
}


class SelectedFoods extends React.Component {
    state = {
        selectedIndexes: new Map()
    };

    toggleSelection = (idx) => {
        const swapped = this.state.selectedIndexes;
        swapped[idx] = !swapped[idx];
        this.setState({
            selectedIndexes: swapped
        });
    }

    render() {
        const { foods } = this.props;
        const foodRows = foods.map((food, idx) => (
            <tr key={idx}
                onClick={() => this.toggleSelection(idx)}
                className={this.state.selectedIndexes[idx] ? 'success' : ''}
            >
                <td>{food.title}</td>
                <td>{food.calories}</td>
                <td>{food.fat}</td>
                <td>{food.carbs}</td>
                <td>{food.protein}</td>
                <td className='no-line'>
                    <i className='glyphicon glyphicon-trash'
                        onClick={() => this.props.onFoodClick(idx)} />
                </td>
            </tr>
        ));

        return (
            <div>
                <table className='table table-condensed table-striped table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th colSpan='5' id='selected-foods-header'>
                                Selected Foods
                        </th>
                        </tr>
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
            </div>
        );
    }
}

export default SelectedFoods;