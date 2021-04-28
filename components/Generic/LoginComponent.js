import React, { Component } from 'react';
import LoginFormComponent from './LoginFormComponent';

export class LoginComponent extends Component {
  render() {
    return (
      <div>
        <h2 align="center">LOGIN PAGE</h2>
        <LoginFormComponent />
      </div>
    );
  }
}

export default LoginComponent;
