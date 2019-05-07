import { connect } from 'react-redux';
import Form from './Form';
import { getEvidence } from '../../redux/actions/get_evidence';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const FormContainer = connect(
  mapStateToProps,
  { getEvidence }
)(Form);

export default FormContainer;
