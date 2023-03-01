import React from 'react';

const Message = () => (
  <div className="messageContainer">
    <div className="message">
      <img
        className="avatar-sm"
        src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="User avatar"
      />
      <div className="messageContent">
        <span className="user">Stephanie S. Romain</span>
        <span className="lastMessage">I miss you</span>
      </div>
    </div>
  </div>
);

export default Message;
