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
