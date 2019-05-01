import { connect } from 'react-redux';
import { setForm } from '../redux/actions/set_form';
import Main from './Main';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const MainContainer = connect(
  mapStateToProps,
  { setForm }
)(Main);

export default MainContainer;
