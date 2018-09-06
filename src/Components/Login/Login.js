import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
      super(props);
    }
  
    login = e => {
      console.log(e.target);
      localStorage.setItem("InstagramUsername", e.target.username.value);
      console.log("Set Username");
    };
    render() {
      return (
        <form onSubmit={this.login}>
          <h1>Username</h1>
          <input name="username" type="text" />
          <h1>Password</h1>
          <input type="password" />
          <button>Login</button>
        </form>
      );
    }
  }
  
  export default Login;
  