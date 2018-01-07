import React from "react";
import PropTypes from "prop-types";
import InputFieldContainer from "../containers/InputFieldContainer";

const WeightRow = ({ row }) => (
  <tr>{row.map(value => <InputFieldContainer />)}</tr>
);

WeightRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WeightRow;
