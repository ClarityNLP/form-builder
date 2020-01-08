import { connect } from 'react-redux'
import NavbarLeft from '../components/NavbarLeft'

function mapStateToProps(state, ownProps) {
  return {
    groups: state.form.groups,
    formIsLoaded: state.form.isLoaded,
    formSlug: state.form.slug
  };
}

const navbarLeftContainer = connect(mapStateToProps, {})(NavbarLeft);

export default navbarLeftContainer;
