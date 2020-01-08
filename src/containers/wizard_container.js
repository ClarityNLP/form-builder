import { connect } from 'react-redux';
import Wizard from '../components/Wizard_v3';
// import idx from 'idx';

// import {
//   getForm
// } from '../actions/workspace';

function mapStateToProps(state, ownProps) {

  // const { formSlug, groupSlug } = ownProps.params;
  // const { pos } = ownProps.search;
  //
  // console.log('GROUP SLUG: ',groupSlug);

  return {
    // groupSlugs: idx(state.form, _ => _.groups.allIds),
    groups: state.form.groups,
    formIsLoaded: state.form.isLoaded,
    formSlug: state.form.slug
  };
}

const wizardContainer = connect(mapStateToProps, {})(Wizard);

export default wizardContainer;
