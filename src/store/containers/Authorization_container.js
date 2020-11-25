import Authorization from "../../component/authorization/Authorization";
import {connect} from "react-redux";
import {actionViewTriggerAuthForm, actionViewTriggerAuth} from "../actions/actions_view";
import {actionLogin, actionRegistration} from "../actions/actions_accounting";

const mapStateToProps = (state) =>
{
    return {
        authorizationStateViewTriggerAuthForm: state.viewTriggerAuthForm
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        authorizationActionViewTriggerAuth: (payload) => dispatch(actionViewTriggerAuth(payload)),
        authorizationActionViewTriggerAuthForm: (payload) => dispatch(actionViewTriggerAuthForm(payload)),
        authorizationActionLogin: (payload) => dispatch(actionLogin(payload)),
        authorizationActionRegistration: (payload) => dispatch(actionRegistration(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
