import Authorization from "../../component/authorization/Authorization";
import {connect} from "react-redux";
import {actionViewTriggerAuth} from "../actions/actions_view";
import {actionLogin, actionRegistration} from "../actions/actions_accounting";

const mapStateToProps = (state) =>
{
    return {
        authorizationStateViewTriggerAuthForm: state.viewTriggerAuthForm,
        authorizationStateRequestStatus: state.requestStatus,
        authorizationStateToken: state.token
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        authorizationActionViewTriggerAuth: (payload) => dispatch(actionViewTriggerAuth(payload)),
        authorizationActionLogin: (payload) => dispatch(actionLogin(payload)),
        authorizationActionRegistration: (payload) => dispatch(actionRegistration(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
