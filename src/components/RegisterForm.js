import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserNameRegister, updateUserPasswordRegister, userPostRegisterForm } from '../actions';
import { compose } from '../utils';  
import { withService } from './hoc';

const SignupForm = ({...props}) => {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        props.userPostRegisterForm(props.registerForm.loginForm);
        }}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onInput={e => props.updateUserNameRegister(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onInput={e => props.updateUserPasswordRegister(e.target.value)}
        />
        <input type="submit" />
      </form>
    );
}

const mapStateToProps = (registerForm) => {
  return {registerForm};
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    updateUserNameRegister: (name) => dispatch(updateUserNameRegister(name)),
    updateUserPasswordRegister: (value) => dispatch(updateUserPasswordRegister(value)),
    userPostRegisterForm: (data) => dispatch(userPostRegisterForm(storeService)(data))
  };
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(SignupForm);
// SignupForm.propTypes = {
//   handle_signup: PropTypes.func.isRequired
// };
