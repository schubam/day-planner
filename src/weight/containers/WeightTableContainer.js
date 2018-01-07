import { connect } from "react-redux";
import moment from "moment";
import WeightTable from "../components/WeightTable";

export const measurementsByWeeks = measurements => {
  const reducer = (memo, val) => {
    let week = moment(val.date, moment.ISO_8601).isoWeek();
    if (!memo.has(week)) {
      memo.set(week, []);
    }
    memo.get(week).push(val);
    return memo;
  };
  return measurements.reduce(reducer, new Map());
};

const mapStateToProps = state => {
  return {
    weeks: measurementsByWeeks(state.measurements)
  };
};

export default connect(mapStateToProps)(WeightTable);
