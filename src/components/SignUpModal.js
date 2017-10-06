import React, { Component } from 'react';
import reactDOM from 'react-dom';
import { Modal, Button} from 'react-materialize';


class Navigation extends Component {
    render() {
        return (
          <Modal> trigger={<Button className="btn-large waves-effect waves-light">LOGIN</Button>}>
          <div className='modalContainer'>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please login</h2>
            <div id="error-div"></div>
            <input type="text" className="form-control" name="username" placeholder="Username" id="login-name" required="" autoFocus=""/>
            <input type="password" className="form-control" name="password" id="login-password" placeholder="Password" required=""/>
            <label className="checkbox">
              <Input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me</label>
              <button className="btn btn-lg btn-primary btn-block" type="submit" id="login-btn">Login</button>
            </form>
          </div>
            <p>Need an account? <a href="/signup">Signup</a></p>
            <p>Or go <a href="/">home</a>.</p>
          </Modal>
        );
    }
};

export default Navigation;
