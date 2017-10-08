import React, { Component } from 'react';
import { Modal, Button, Row, Col, Input} from 'react-materialize';


class SignInModal extends Component {
    render() {
        return (
          <Modal trigger={<Button className="btn-large waves-effect waves-light">LOGIN</Button>}>
          <div className='modalContainer form-signin'>
            <h4 className="form-signin-heading">Please login</h4>
          <Col s={12} id="error-div">
              <Input type="text" className="form-control" name="username" placeholder="Username" id="login-name" required="" autoFocus=""/>
          </Col>
          <Col s={12} id="error-div">
              <Input type="password" className="form-control" name="password" id="login-password" placeholder="Password" required=""/>
          </Col>
            <label className="checkbox">
              <Input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me</label>
              <Button className="btn btn-lg btn-primary btn-block" type="submit" id="login-btn">Login</Button>
            <p>Need an account? <a href="/signup">Signup</a></p>
            <p>Or go <a href="/">home</a>.</p>
          </div>
          </Modal>
        );
    }
};

export default SignInModal;
