import {connect} from "react-redux";
import {actionViewTriggerAuthForm} from "../actions/actions_view";
import AuthForm from "../../component/authorization/Auth_form";

const mapStateToProps = (state) =>
{
    return {
        authformStateViewTriggerAuthForm: state.viewTriggerAuthForm
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        authformActionViewTriggerAuthForm: (payload) => dispatch(actionViewTriggerAuthForm(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
