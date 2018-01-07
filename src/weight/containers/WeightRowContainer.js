import {connect} from "react-redux";
import WeightRow from "../components/WeightRow";

const mapStateToProps = (state, ownProps) => {
    const week = state.weeks[ownProps.id];

    return {
        row: [week.monday, week.tuesday, week.wednesday, week.thursday,
            week.friday, week.saturday, week.sunday]
    };
};

export default connect(mapStateToProps)(WeightRow);