import {actionSetCurrentPage, actionViewTriggerAuth} from "../actions/actions_view";
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
        startActionViewTriggerAuth: (payload) => dispatch(actionViewTriggerAuth(payload)),
        startActionSetCurrentPage: (payload) => dispatch(actionSetCurrentPage(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
