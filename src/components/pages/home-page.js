import React from 'react';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { userVerification } from '../../actions';
import { compose } from '../../utils';

import './home-page.css';

class HomePage extends React.Component {


  // handle_logout = () => {
  //   localStorage.removeItem('token');
  //   this.setState({ logged_in: false, username: '' });
  // };

  componentDidMount(){
    // localStorage.setItem('token', 'dg78g7dg7g7d7gd7g7d8');
    this.props.userVerification()
    console.log(localStorage.token)
    console.log(this.props)
  }


  render() {
    const logged = localStorage.token ? <h1>AUTH</h1> : <h1>NO</h1>
    console.log(this.props)
    return (
      <React.Fragment>
        {logged}
        <h1>HOME</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({loggedIn: {logged_in}}) => {
  return {logged_in};
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    userVerification: () => dispatch(userVerification())
  };
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
