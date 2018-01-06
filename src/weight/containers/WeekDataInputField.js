import React from "react";
import { connect } from 'react-redux'

const WeekDataInputField = ({ value, onChangeData }) => (
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
export default connect()(WeekDataInputField);
