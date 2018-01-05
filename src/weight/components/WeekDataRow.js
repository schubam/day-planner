import React from "react";
import WeekDataField from "./WeekDataField";
import WeekDataInputField from "./WeekDataInputField";

const WeekDataRow = ({ week, columns }) => (
  <tr>
    {columns.map((day, i) => (
      <WeekDataInputField value={week[day]} key={`${week.week}_${i}`} />
    ))}
  </tr>
);

export default WeekDataRow;
