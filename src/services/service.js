import axios from 'axios';
export default class storeService {

  _apiBase = 'http://127.0.0.1:8000/';


  handleLogin = (e, data) => {
    e.preventDefault();
    axios.post(this._apiBase+'token-auth/', data)
      .then(res => res)
  };

  handleSignup = (e, data) => {
    e.preventDefault();
    axios.post(this._apiBase+'core/users/', data)
      .then(res => res)
  };

  CurrentUser = () => {
    axios.post(this._apiBase+'core/current_user/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(res => res)
  }

}
