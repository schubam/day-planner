import { connect } from 'react-redux';
import InputField from '../components/InputField';

const mapStateToProps = state => {
    return {
        value: state.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeData: () => dispatch({
            type: 'CHANGE_WEIGHT'
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputField);
