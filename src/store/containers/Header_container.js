import {actionViewTriggerAuth} from "../actions/actions_view";
import Header from "../../component/Header";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) =>
{
    return {
        headerActionViewTriggerAuth: (payload) => dispatch(actionViewTriggerAuth(payload))
    }
}

export default connect(null, mapDispatchToProps)(Header);
