import React from 'react';
import { DoubleBounce } from 'better-react-spinkit';
import './Loading.scss';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className="Loading">
      <DoubleBounce size={50} />
    </div>
  );
};

export default Loading;