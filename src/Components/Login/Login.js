import React, { Component } from 'react';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }

    login = e => {
        console.log(e.target);
        localStorage.setItem('InstaUser', e.target.username.value);
        console.log('Set Username');
    }

    render() {
        return (
            <form onSubmit={this.login}>
            <h1>IstaUser</h1>
            <input name='username' text='text'/>
            <h1>Password</h1>
            <input type='password'/>
            <button>Login</button>
            </form>
        );
    }
}

export default Login;