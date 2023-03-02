import React from 'react';
import { PictureOutlined, LinkOutlined } from '@ant-design/icons';

const InputMessage = () => (
  <div className="inputMessageContainer">
    <input type="text" placeholder="Type something..." />
    <div className="actions">
      <label htmlFor="doc">
        <LinkOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
        <input style={{ display: 'none' }} type="file" id="doc" />
      </label>
      <label htmlFor="picture">
        <PictureOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
        <input style={{ display: 'none' }} type="file" id="picture" />
      </label>
      <button type="button">Send</button>
    </div>
  </div>
);

export default InputMessage;
