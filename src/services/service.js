import axios from 'axios';
export default class storeService {

  _apiBase = 'http://127.0.0.1:8000/';


  handleLogin = async (data) => {
    const res = await axios.post(this._apiBase+'token-auth/', data);
      return res
  };

  handleSignup = (e, data) => {
    e.preventDefault();
    axios.post(this._apiBase+'core/users/', data)
      .then(res => res)
  };

  CurrentUser = (token) => {
    axios.post(this._apiBase+'core/current_user/', {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(res => res)
  }

}
