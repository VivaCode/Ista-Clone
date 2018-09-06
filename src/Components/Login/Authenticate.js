import React, {Component} from "react";
import Login from './Login';

const Authenticate = App => 
  class extends Component {
    constructor (props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      console.log("Local storage: ", localStorage.getItem("InstagramUsername"));
      if (localStorage.getItem("InstagramUsername") !== null) {
        this.setState({ loggedIn: true });
      }
    }

    render () {
      //If user is logged in render App
      // If user is not logged in render login component.
      let output = this.state.loggedIn ? <App /> : <Login />;
      return output;
    }
  }


export default Authenticate;