const updateRegisterForm = (state, action) => {
    if(state === undefined) {
        return {
            username: '',
            password: ''
        }
    }

    switch (action.type) {
        case 'USER_REGISTER_NAME':
            return {
                username: action.payload,
                password: state.registerForm.password
          }

        case 'USER_REGISTER_PASSWORD':
            return {
                username: state.registerForm.username,
                password: action.payload
            };
    
    

    default:
        return state.registerForm;
    }
}

export default updateRegisterForm;