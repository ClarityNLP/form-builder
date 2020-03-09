import { connect } from 'react-redux'
import QuestionContent from '../components/QuestionContent'

function mapStateToProps(state, ownProps) {
  const {
    groupSlug,
    questionSlug
  } = ownProps;

  return {
    question: {
      slug: questionSlug,
      ...state.activity.groups.byId[groupSlug].questions.byId[questionSlug],
    }
  }
}

const questionContentContainer = connect(mapStateToProps, {})(QuestionContent);

export default questionContentContainer;
