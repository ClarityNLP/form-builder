import { connect } from 'react-redux'
import NavbarTop from '../components/NavbarTop'

function mapStateToProps(state) {
  return {
    router: state.router
  };
}

const navbarTopContainer = connect(mapStateToProps, {
})(NavbarTop);

export default navbarTopContainer;
