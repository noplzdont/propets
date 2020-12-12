import Sidebar from "../../component/Sidebar";
import {connect} from "react-redux";
import {actionLogout} from "../actions/actions_accounting";

const mapStateToProps = (state) =>
{
    return {
        sidebarStateAccount: state.account
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        sidebarActionLogout: () => dispatch(actionLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
