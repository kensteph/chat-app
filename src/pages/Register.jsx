import React from 'react';
import { PictureOutlined } from '@ant-design/icons';

const Register = () => (
  <div className="formContainer">
    <div className="formWrapper">
      <span className="appLogo">KS Chat</span>
      <span className="formTitle">Register</span>
      <form>
        <input type="text" placeholder="Display name" name="username" />
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm password"
          name="cpassword"
        />
        <label htmlFor="avatar">
          <PictureOutlined
            style={{ cursor: 'pointer', fontSize: '30px' }}
          />
          <span>Add your avatar</span>
          <input
            style={{ display: 'none' }}
            type="file"
            name="avatar"
            id="avatar"
          />
        </label>
        <button type="submit">Sin up</button>
      </form>
      <p>You do have an account ? Login</p>
    </div>
  </div>
);

export default Register;
