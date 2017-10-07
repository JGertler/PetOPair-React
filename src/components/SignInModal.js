import React, { Component } from 'react';
import { Modal, Button, Row, Input} from 'react-materialize';


class SignInModal extends Component {
    render() {
        return (
          <Modal trigger={<Button className="btn-large waves-effect waves-light">LOGIN</Button>}>
          <div className='modalContainer'>
          <Row className="form-signin">
            <header className="form-signin-heading">Please login</header>
            <Row id="error-div"></Row>
              <Input type="text" className="form-control" name="username" placeholder="Username" id="login-name" required="" autoFocus=""/>
              <Input type="password" className="form-control" name="password" id="login-password" placeholder="Password" required=""/>
            <label className="checkbox">
              <Input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me</label>
              <Button className="btn btn-lg btn-primary btn-block" type="submit" id="login-btn">Login</Button>
          </Row>
          </div>
            <p>Need an account? <a href="/signup">Signup</a></p>
            <p>Or go <a href="/">home</a>.</p>
          </Modal>
        );
    }
};

export default SignInModal;
