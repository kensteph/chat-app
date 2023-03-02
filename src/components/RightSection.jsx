import React from 'react';
import DisplayMessages from './DisplayMessages';
import InputMessage from './InputMessage';
import RightHeader from './RightHeader';

const RightSection = () => (
  <div className="rightSection">
    <RightHeader />
    <DisplayMessages />
    <InputMessage />
  </div>
);

export default RightSection;
