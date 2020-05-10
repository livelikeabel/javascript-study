import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>About</h1>
      <p>This project is sample project that practice react-router base</p>
      {showDetail && <p>hihihi</p>}
    </div>
  );
};

export default About;
