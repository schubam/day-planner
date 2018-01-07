import React from "react";
import PropTypes from "prop-types";

const InputField = ({ value, onChangeData }) => (
  <td>
    <input
      className="weight"
      value={value}
      type="number"
      size="6"
      step="0.1"
      onChange={onChangeData}
    />
  </td>
);

InputField.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeData: PropTypes.func.isRequired
};

export default InputField;
