import Authorization from "../../component/authorization/Authorization";
import {connect} from "react-redux";
import {actionViewTriggerAuthForm, actionViewTriggerAuth, actionLogin, actionRegistration} from "../actions/actions";

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
        authorizationActionLogin: () => dispatch(actionLogin()),
        authorizationActionRegistration: () => dispatch(actionRegistration())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
