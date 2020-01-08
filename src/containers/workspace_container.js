import { connect } from 'react-redux'
import Workspace from '../components/Workspace'
import idx from 'idx';

import {
  getForm,
  testUpdateValue
} from '../actions/workspace';

function mapStateToProps(state, ownProps) {

  // const { formSlug, groupSlug } = ownProps.params;
  // const { pos } = ownProps.search;
  //
  // console.log('GROUP SLUG: ',groupSlug);
  // console.log("OWN PROPS@@: ",ownProps);

  return {
    formIsLoaded: state.form.isLoaded,
  };
}

const workspaceContainer = connect(mapStateToProps, {
  getForm,
  testUpdateValue
})(Workspace);

export default workspaceContainer;
