import React from 'react';

const Chat = () => (
  <div className="chatContainer">
    <div className="chatInfo">
      <img
        className="avatar"
        src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="User avatar"
      />
      <div className="userInfo">
        <span className="user">Stephanie S. Romain</span>
        <span className="lastMessage">I miss you</span>
      </div>

    </div>
  </div>
);

export default Chat;
