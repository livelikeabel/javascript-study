import React from 'react';
import { DoubleBounce } from 'better-react-spinkit';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading">
      <DoubleBounce size={50} color="#027dbf"/>
    </div>
  );
};

export default Loading;