import Main from "../../component/Main";
import {connect} from "react-redux";
import {actionSetCurrentPage} from "../actions/actions_view";

const mapStateToProps = (state) =>
{
    return {
        mainStateCurrentPage: state.currentPage
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        mainActionSetCurrentPage: (payload => dispatch(actionSetCurrentPage(payload)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
