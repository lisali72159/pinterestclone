import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import withRouter from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default (connect(
  null,
  mapDispatchToProps
)(Navbar));