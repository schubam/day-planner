import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

const WeightRow = ({ row }) => {
  return (
    <tr>
      {row.map(measurement => (
        <InputField
          key={measurement.date}
          weight={measurement.weight}
          date={measurement.date}
        />
      ))}
    </tr>
  );
};

WeightRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default WeightRow;
