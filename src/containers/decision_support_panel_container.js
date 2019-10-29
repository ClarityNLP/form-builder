import { connect } from 'react-redux'
import DecisionSupportPanel from '../components/DecisionSupportPanel'

function mapStateToProps(state) {
  return {
    router: state.router,
    form: state.form
  };
}

const decisionSupportPanelContainer = connect(mapStateToProps, {
})(DecisionSupportPanel);

export default decisionSupportPanelContainer;
