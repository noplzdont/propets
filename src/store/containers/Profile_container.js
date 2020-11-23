import Profile from "../../component/account/Profile";
import {connect} from "react-redux";
import {actionViewTriggerProfile} from "../actions/actions";

const mapStateToProps = (state) =>
{
    return {
        profileViewState: state.profileViewTrigger
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        profileViewTrigger: () => dispatch(actionViewTriggerProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
