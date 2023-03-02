import React from 'react';

const Login = () => (
  <div className="formContainer">
    <div className="formWrapper">
      <span className="appLogo">KS Chat</span>
      <span className="formTitle">Login</span>
      <form>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sin in</button>
      </form>
      <p>You don&apos;t have an account ? Register</p>
    </div>
  </div>
);

export default Login;
