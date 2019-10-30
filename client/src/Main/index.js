import { connect } from 'react-redux';
import { setForm } from '../redux/actions/set_form';
import { setSmart } from '../redux/actions/set_smart';
import { setPatient } from '../redux/actions/set_patient';
import Main from './Main';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const MainContainer = connect(
  mapStateToProps,
  { setForm, setSmart, setPatient }
)(Main);

export default MainContainer;
