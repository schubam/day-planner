import {connect} from "react-redux";
import WeightTable from "../components/WeightTable";

const mapStateToProps = state => ({
    weeks: state.weeks
});

export default connect(mapStateToProps)(WeightTable);