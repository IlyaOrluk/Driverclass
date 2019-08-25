const updateLoginForm = (state, action) => {
    if(state === undefined) {
        return {
            username: '',
            password: ''
        }
    }

    switch (action.type) {
        case 'USER_AUTHENTICATION_NAME':
            console.log(action.payload)
          return {
            username: action.payload,
            password: state.loginForm.password
          }

        case 'USER_AUTHENTICATION_PASSWORD':
                console.log(action.payload)
              return {
                username: state.loginForm.username,
                password: action.payload
              };
    
    

    default:
        return state.loginForm;
    }
}

export default updateLoginForm;