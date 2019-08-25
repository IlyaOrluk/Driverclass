import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserNameLogin, updateUserPasswordLogin, userPostLoginForm } from '../actions';
import { compose } from '../utils';  
import { withService } from './hoc';

 const LoginForm = ({...props}) => {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        props.userPostLoginForm(props.loginForm.loginForm);
        }}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onInput={e => props.updateUserNameLogin(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onInput={e => props.updateUserPasswordLogin(e.target.value)}
        />
        <input type="submit" />
      </form>
    );
}

const mapStateToProps = (loginForm) => {
  return {loginForm};
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    updateUserNameLogin: (name) => dispatch(updateUserNameLogin(name)),
    updateUserPasswordLogin: (value) => dispatch(updateUserPasswordLogin(value)),
    userPostLoginForm: (data) => dispatch(userPostLoginForm(storeService)(data))
  };
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);

// LoginForm.propTypes = {
//   handle_login: PropTypes.func.isRequired
// };