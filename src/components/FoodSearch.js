import React from "react";
import Remote from './Remote'

class FoodSearch extends React.Component {
    state = {
        foods: [],
        searchValue: '',
        showRemoveIcon: false
    }

    handleSearchChange = e => {
        const value = e.target.value;
        this.setState({
            searchValue: value
        });

        if (value === '') {
            this.setState({
                foods: [],
                showRemoveIcon: false
            });
        } else {
            this.setState({
                showRemoveIcon: true
            });

            Remote.search(value, foods => {
                this.setState({
                    foods: foods
                });
            });
        }
    }

    handleSearchCancel = () => {
        this.setState({
            foods: [],
            showRemoveIcon: false,
            searchValue: ''
        });
    }

    render() {
        const { showRemoveIcon, foods } = this.state;
        const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

        const foodRows = foods.map(food => (
            <tr 
                key={food.id}
                onClick={() => this.props.onFoodClick(food)}
            >
                <td>{food.title}</td>
                <td>{food.calories}</td>
                <td>{food.fat}</td>
                <td>{food.carbs}</td>
                <td>{food.protein}</td>
            </tr>
        ));
        return (
            <div id='food-search'>
                <table className='table table-condensed table-striped table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th colSpan='5'>
                                <div>
                                    <div>
                                        <input
                                            // className="prompt"
                                            type="text"
                                            placeholder="Search foods..."
                                            value={this.state.searchValue}
                                            onChange={this.handleSearchChange}
                                        />
                                        <i className="glyphicon glyphicon-search"/>
                                        <i className="glyphicon glyphicon-remove"
                                            onClick={this.handleSearchCancel}
                                            style={removeIconStyle}/>
                                    </div>
                                </div>
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
                </table>
            </div>
        );
    }
}

export default FoodSearch;