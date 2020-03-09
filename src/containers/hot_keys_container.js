import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import HotKeys from '../components/HotKeys'
import { withRouter } from 'react-router-dom';

function mapStateToProps(state, ownProps) {

  return {
    groupsAllIds: state.activity.groups.allIds,
    questionsAllIds: state.activity.groups.byId[ownProps.match.params.groupSlug].questions.allIds,
    ...ownProps.match.params
  };
}

const hotKeysContainer = connect(mapStateToProps, {
  push
})(HotKeys);

export default withRouter(hotKeysContainer);
