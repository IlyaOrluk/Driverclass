import React from 'react';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { userVerification } from '../../actions';
import { compose } from '../../utils';
import LoginForm from '../LoginForm';

import './home-page.css';


class HomePage extends React.Component {


  // handle_logout = () => {
  //   localStorage.removeItem('token');
  //   this.setState({ logged_in: false, username: '' });
  // };

  componentDidMount(){
    this.props.userVerification()
  }

  componentDidUpdate(prevProps) {
    if(this.props.logged_in !== prevProps.logged_in){
      this.props.userVerification()
    }
  }

  render() {
    const logged = localStorage.token ? <h1>YOU AUTH</h1> : <LoginForm />
    console.log(this.props.logged_in)
    return (
      <React.Fragment>
        <span>{`${this.props.logged_in}`}</span>
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
