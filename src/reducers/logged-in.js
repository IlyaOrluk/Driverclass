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
    
    

    default:
        return state.loggedIn;
    }
}

export default updateloggedIn;