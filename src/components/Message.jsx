import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ owner }) => (
  <div className={`messageContainer ${owner}`}>
    <div className="message">
      <div className="user">
        <img
          className="avatar-sm"
          src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="User avatar"
        />
        <span className="hour">Just now</span>
      </div>

      <div className={`messageContent ${owner}`}>
        <span>I miss you miss you miss you miss you miss you miss you</span>
      </div>
    </div>
  </div>
);

Message.propTypes = { owner: PropTypes.string.isRequired };

export default Message;
