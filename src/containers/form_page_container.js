import { connect } from 'react-redux'
import FormPage from '../components/FormPage'
import { push } from 'connected-react-router'

function mapStateToProps(state, ownProps) {
  return {
    questionsAllIds: state.form.groups.byId[ownProps.group].questions.allIds,
    groupSlug: ownProps.group,
    formSlug: ownProps.form
  };
}

const formPageContainer = connect(mapStateToProps, {
  push
})(FormPage);

export default formPageContainer;
