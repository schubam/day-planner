import React from "react";
import PropTypes from "prop-types";
import InputFieldContainer from "../containers/InputFieldContainer";

const WeightRow = ({ row }) => (
    <tr>
        {row.map(value => <InputFieldContainer value={value}/>)}
    </tr>
)

export default WeightRow;