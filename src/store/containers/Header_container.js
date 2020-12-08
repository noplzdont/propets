import {actionViewTriggerAuth} from "../actions/actions_view";
import Header from "../../component/Header";
import {connect} from "react-redux";

const mapStateToProps = (state) =>
{
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        headerActionViewTriggerAuth: (payload) => dispatch(actionViewTriggerAuth(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
