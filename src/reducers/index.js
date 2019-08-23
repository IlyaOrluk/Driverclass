import updateLoggedIn from './logged-in';

const reducer = (state, action) => {
  return {
    loggedIn: updateLoggedIn(state, action)
  };
};

export default reducer;