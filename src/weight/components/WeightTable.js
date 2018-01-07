import React from "react";
import PropTypes from "prop-types";
import HeaderRow from "./HeaderRow";
import WeightRowContainer from "../containers/WeightRowContainer";
import { capitalizedColumns } from "../support/columns";

const weekData = weeks => {
  let array = [];
  // weeks.map(() => [<HeaderRow />, <WeightRowContainer />]);
  weeks.forEach((value, key) => {
    array.push([
      <HeaderRow label={key} />,
      <WeightRowContainer weekId={key} />
    ]);
  });
  return array;
};

const WeightTable = ({ weeks }) => (
  <table border="1">
    <thead>
      <tr>{capitalizedColumns.map(l => <th key={l}>{l}</th>)}</tr>
    </thead>
    <tbody>{weekData(weeks)}</tbody>
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
