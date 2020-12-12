import Content from "../../component/Content";
import {connect} from "react-redux";

const mapStateToProps = (state) =>
{
    return {
        contentStateToken: state.token
    }
};

export default connect(mapStateToProps)(Content);
