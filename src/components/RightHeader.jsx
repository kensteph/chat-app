import { VideoCameraOutlined, UserAddOutlined, MoreOutlined } from '@ant-design/icons';
import React from 'react';

const RightHeader = () => (
  <div className="rightHeaderContainer">
    <div className="icons">
      <VideoCameraOutlined />
      <UserAddOutlined />
      <MoreOutlined />
    </div>
  </div>
);

export default RightHeader;
