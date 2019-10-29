import { connect } from 'react-redux'
import FormPanel from '../components/FormPanel'

function mapStateToProps(state) {
  return {
    pathname: state.router.location.pathname,
    form: state.form
  };
}

const formPanelContainer = connect(mapStateToProps, {
})(FormPanel);

export default formPanelContainer;
