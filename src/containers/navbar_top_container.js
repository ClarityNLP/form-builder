import { connect } from 'react-redux'
import NavbarTop from '../components/NavbarTop'
import { push } from 'connected-react-router'

function mapStateToProps(state, ownProps) {
  return {
    activityId: state.activity.id,
    activityIsLoaded: state.activity.isLoaded,
    formSlug: state.activity.slug,
    formName: state.activity.name,
    groupLookup: state.groupLookup,
    catalog: state.catalog
  };
}

const navbarTopContainer = connect(mapStateToProps, {
  push
})(NavbarTop);

export default navbarTopContainer;
