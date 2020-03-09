import { connect } from 'react-redux'
import FormPage from '../components/FormPage'
import { push } from 'connected-react-router'

function mapStateToProps(state, ownProps) {
  return {
    match: ownProps.match,
    location: ownProps.location,
    questionsAllIds: state.activity.groups.byId[ownProps.group].questions.allIds,
    groupSlug: ownProps.group,
    activityId: ownProps.activity
  };
}

const formPageContainer = connect(mapStateToProps, {
  push
})(FormPage);

export default formPageContainer;
