const updateloggedIn = (state, action) => {
    if(state === undefined) {
        return {
            logged_in: '',
            username: ''
        }
    }
    
      switch (action.type) {
        case 'USER_VERIFICATION':
          return {
            logged_in: action.payload,
            username: ''
          };

        case 'USER_AUTH_NAME':
            return {
              logged_in: state.loggedIn.logged_in,
              username: action.payload
            };
    

    default:
        return state.loggedIn;
    }
}

export default updateloggedIn;