import { connect } from 'react-redux'
import NavbarLeft from '../components/NavbarLeft'

function mapStateToProps(state, ownProps) {
  return {
    groups: state.activity.groups,
    activityIsLoaded: state.activity.isLoaded,
    activityId: state.activity._id
  };
}

const navbarLeftContainer = connect(mapStateToProps, {})(NavbarLeft);

export default navbarLeftContainer;
