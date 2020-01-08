import { connect } from 'react-redux'
import QuestionIndicator from '../components/QuestionIndicator'

function mapStateToProps(state, ownProps) {
  const {
    groupSlug,
    questionSlug,
    isFocused
  } = ownProps;

  return {
    question: state.form.groups.byId[groupSlug].questions.byId[questionSlug],
    isFocused: isFocused
  };
}

const questionIndicatorContainer = connect(mapStateToProps, {})(QuestionIndicator);

export default questionIndicatorContainer;
