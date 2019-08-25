import updateLoggedIn from './logged-in';
import updateLoginForm from './login-form';
import updateRegisterForm from './register-form';

const reducer = (state, action) => {
  return {
    loggedIn: updateLoggedIn(state, action),
    loginForm: updateLoginForm(state, action),
    registerform: updateRegisterForm(state, action)
  };
};

export default reducer;