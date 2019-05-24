import React from 'react'
import PropTypes from 'prop-types'
import { FadingCircle } from "better-react-spinkit";
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <LoadingWrapper>
      <FadingCircle color={"#51cf66"} size={60} />
    </LoadingWrapper>
  );
};

Loading.propTypes = {

}

export default Loading;

