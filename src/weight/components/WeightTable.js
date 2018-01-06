import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import WeekHeaderRow from "./WeekHeaderRow";
import WeekDataRow from "./WeekDataRow";

// 2018: Week 1 - Week 52

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const WeightTable = ({columns, weeks}) => (
    <table border="1">
        <thead>
        <tr>{columns.map(label => <th key={label}>{capitalize(label)}</th>)}</tr>
        </thead>
        <tbody>
        {weeks.map(week => [
            <WeekHeaderRow label={week.label} columns={columns} key={week.week}/>,
            <WeekDataRow week={week} columns={columns} key={`data_${week.week}`}/>
        ])}
        </tbody>
    </table>
);

WeightTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    weeks: PropTypes.arrayOf(
        PropTypes.shape(
            {
                week: PropTypes.number.isRequired,
                label: PropTypes.string.isRequired,
                monday: PropTypes.number,
                tuesday: PropTypes.number,
                wednesday: PropTypes.number,
                thursday: PropTypes.number,
                friday: PropTypes.number,
                saturday: PropTypes.number,
                sunday: PropTypes.number,
            }
        ).isRequired)
        .isRequired,
};

const mapStateToProps = state => {
    return {
        columns: state.columns,
        weeks: state.weeks
    };
};

export default connect(mapStateToProps)(WeightTable);
