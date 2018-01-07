import React from "react";
import PropTypes from "prop-types";
import HeaderRow from "./HeaderRow";
import WeightRowContainer from "../containers/WeightRowContainer";
import { capitalizedColumns } from "../support/columns";

const WeightTable = ({ weeks }) => (
  <table border="1">
    <thead>
      <tr>{capitalizedColumns.map(label => <th key={label}>{label}</th>)}</tr>
    </thead>
    <tbody>
      {weeks.map((week, i) => [<HeaderRow />, <WeightRowContainer id={i} />])}
    </tbody>
  </table>
);

WeightTable.propTypes = {
  weeks: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      monday: PropTypes.number,
      tuesday: PropTypes.number,
      wednesday: PropTypes.number,
      thursday: PropTypes.number,
      friday: PropTypes.number,
      saturday: PropTypes.number,
      sunday: PropTypes.number
    }).isRequired
  ).isRequired
};

export default WeightTable;
