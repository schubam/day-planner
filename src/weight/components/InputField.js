import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { weightChanged, weightAdded } from "../actions";

let InputField = ({ date, weight, dispatch }) => {
  let input;
  return (
    <td>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          if (weight) {
            dispatch(weightChanged(date, input.value));
          } else {
            dispatch(weightAdded(date, input.value));
          }
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
          className="weight"
          defaultValue={weight}
          type="number"
          step="0.1"
        />
      </form>
    </td>
  );
};

InputField.propTypes = {
  date: PropTypes.string.isRequired,
  weight: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

InputField = connect()(InputField);
export default InputField;
