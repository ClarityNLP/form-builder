import { connect } from 'react-redux';
import Evidence from './Evidence';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const EvidenceContainer = connect(
  mapStateToProps,
  {}
)(Evidence);

export default EvidenceContainer;
