import { connect } from 'react-redux';
import Form from './Form';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const FormContainer = connect(
  mapStateToProps,
  {}
)(Form);

export default FormContainer;
