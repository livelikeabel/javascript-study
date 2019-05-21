import React from 'react';
import PropTypes from 'prop-types';
import { DoubleBounce } from 'better-react-spinkit';
import './Loading.scss';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className="Loading">
      <DoubleBounce size={50} color="#fa5252"/>
    </div>
  );
};

Loading.defaultProps = {
  isLoading: true
}
Loading.propTypes = {
  isLoading: PropTypes.bool
}

export default Loading;