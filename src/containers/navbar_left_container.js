import { connect } from 'react-redux'
import NavbarLeft from '../components/NavbarLeft'
import { push } from 'connected-react-router'

function mapStateToProps(state, ownProps) {
  return {
    pathname: state.router.location.pathname,
    form: state.form,
    evidenceByGroup: state.evidenceByGroup,
    ...ownProps.params
  };
}

const navbarLeftContainer = connect(mapStateToProps, {
  push
})(NavbarLeft);

export default navbarLeftContainer;
