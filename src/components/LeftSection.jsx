import React from 'react';
import ChatList from './ChatList';
import LeftHeader from './LeftHeader';
import SearchUser from './SearchUser';

const LeftSection = () => (
  <div className="leftSection">
    <LeftHeader />
    <SearchUser />
    <ChatList />
  </div>
);

export default LeftSection;
