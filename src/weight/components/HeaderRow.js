import React from "react";
import PropTypes from "prop-types";
import {colSpan} from "../support/columns";

const HeaderRow = ({ label }) => (
  <tr>
    <th colSpan={colSpan}>{label}</th>
  </tr>
);

HeaderRow.propTypes = {
    label: PropTypes.string.isRequired
};

export default HeaderRow;
