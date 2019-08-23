import React, { Component } from 'react';
import { HomePage } from '../pages';

import './app.css';

class App extends Component {

  componentDidMount() {
      // if (this.state.logged_in) {
      //   fetch('http://localhost:8000/core/current_user/', {
      //     headers: {
      //       Authorization: `JWT ${localStorage.getItem('token')}`
      //     }
      //   })
      //     .then(res => res.json())
      //     .then(json => {
      //       this.setState({ username: json.username });
      //     });
      // }
  }



  // handle_logout = () => {
  //   localStorage.removeItem('token');
  //   this.setState({ logged_in: false, username: '' });
  // };



  render() {


    return (
      <div className="App">
        <HomePage />
        <h3>
app
        </h3>
      </div>
    );
  }
}



export default App;

