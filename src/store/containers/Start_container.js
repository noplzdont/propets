import {actionViewTriggerAuth} from "../actions/actions";
import {connect} from "react-redux";
import Start from "../../component/Start";

const mapStateToProps = (state) =>
{
    return {
        startStateViewTriggerAuth: state.viewTriggerAuth
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        startActionViewTriggerAuth: (payload) => dispatch(actionViewTriggerAuth(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
