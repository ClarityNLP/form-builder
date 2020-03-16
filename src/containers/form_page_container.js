import { connect } from 'react-redux'
import FormPage from '../components/FormPage'
import { push } from 'connected-react-router'

function mapStateToProps(state, ownProps) {
  return {
    questionsAllIds: state.activity.groups.byId[ownProps.group].questions.allIds,
    ...ownProps
  };
}

const formPageContainer = connect(mapStateToProps, {
  // push
})(FormPage);

export default formPageContainer;
