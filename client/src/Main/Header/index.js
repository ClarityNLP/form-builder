import { connect } from 'react-redux';
import { setDate } from '../../redux/actions/set_date';
import Header from './Header';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

const HeaderContainer = connect(
  mapStateToProps,
  { setDate }
)(Header);

export default HeaderContainer;
