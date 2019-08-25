// [request_type]_[object]_[action]
const itemsLoaded = (newItem) => { 
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newItem
  };
};

const itemsRequested = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  };
};

const itemsError = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  };
};

const userVerification = () => {
  return {
    type: 'USER_VERIFICATION',
    payload: localStorage.token ? true : false
  }
}

export const updateUserNameLogin = (name) => {
  return {
    type: 'USER_AUTHENTICATION_NAME',
    payload: name
  }
}

export const updateUserPasswordLogin = (value) => {
  return {
    type: 'USER_AUTHENTICATION_PASSWORD',
    payload: value
  }
}

export const userPostLoginForm = (service) => (data) => (dispatch) => {
  console.log(data)
  service.handleLogin(data)
  .then((res) => {
    console.log(res)
    localStorage.setItem('token', res.data.token);
  })
  .catch((err) => alert(err));
}

const fetchItems = (service) => (pageNumber, listCount) => (dispatch) => {
  dispatch(itemsRequested());
  service.getPokemonList(pageNumber, listCount)
    .then((res) => dispatch(itemsLoaded(res)))
    .catch((err) => dispatch(itemsError(err)));
};



export {
  fetchItems,
  userVerification
};
