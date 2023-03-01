import React from 'react';
import Chat from './Chat';
import LeftHeader from './LeftHeader';
import SearchUser from './SearchUser';

const LeftSection = () => (
  <div className="leftSection">
    <LeftHeader />
    <SearchUser />
    <Chat />
  </div>
);

export default LeftSection;
