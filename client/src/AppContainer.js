import { connect } from 'react-redux';
import { setPatient } from './redux/actions/set_patient';
import { setSmart } from './redux/actions/set_smart';

import App from './App';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const AppContainer = connect(
  mapStateToProps,
  { setPatient, setSmart }
)(App);

export default AppContainer;
