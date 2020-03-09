import { connect } from 'react-redux'
import Workspace from '../components/Workspace'

import {
  getActivity,
  saveActivityValues,
  saveActivityGroupLoadingState
} from '../actions/activity';

function mapStateToProps(state, ownProps) {
  return {
    activityId: ownProps.activityId,
    activityIsLoaded: state.activity.isLoaded,
    groups: state.activity.groups
  };
}

const workspaceContainer = connect(mapStateToProps, {
  getActivity,
  saveActivityValues,
  saveActivityGroupLoadingState
})(Workspace);

export default workspaceContainer;
