import React from 'react';

const LeftHeader = () => (
  <div className="header">
    <span className="logo">KS Chat</span>
    <div className="userInfo">
      <img
        className="avatar-sm"
        src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="User avatar"
      />
      <span className="user">Stephanie S. Romain</span>
      <button type="button">Logout</button>
    </div>
  </div>
);

export default LeftHeader;
