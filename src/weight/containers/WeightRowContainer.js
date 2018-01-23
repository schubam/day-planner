import { connect } from "react-redux";
import WeightRow from "../components/WeightRow";
import moment from "moment";

export const measurementsByWeek = (data, week) => {
  const firstOfYear = moment().startOf("year");
  const weekInYear = firstOfYear.add(week - 1, "w");
  const monday = weekInYear.startOf("isoWeek");

  return [0, 1, 2, 3, 4, 5, 6]
    .map(offset => monday.clone().add(offset, "d"))
    .map(date => ({ date: date.format("Y-MM-DD") }))
    .map(date => {
      const filtered = data.filter(e => e.date === date.date);
      if (filtered.length === 0) return date;
      return filtered[0];
    });
};

const mapStateToProps = (state, ownProps) => {
  return {
    row: measurementsByWeek(state.measurements, ownProps.weekId)
  };
};

export default connect(mapStateToProps)(WeightRow);
