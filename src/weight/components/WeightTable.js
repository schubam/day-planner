import React from "react";
import PropTypes from "prop-types";
import HeaderRow from "./HeaderRow";
import WeightRowContainer from "../containers/WeightRowContainer";
import { capitalizedColumns } from "../support/columns";

const weekData = weeks => {
  let array = [];

  weeks.forEach((days, weekNumber) => {
    console.log(days, weekNumber);
    array.push([
      <HeaderRow key={weekNumber} label={weekNumber} />,
      <WeightRowContainer key={weekNumber} weekId={weekNumber} />
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
  weeks: PropTypes.objectOf(PropTypes.object).isRequired
};

export default WeightTable;
