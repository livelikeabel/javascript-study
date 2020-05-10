import React from 'react';
import WithRouterSample from "./withRouterSample";

const data = {
  abel: {
    name: 'Abel ko',
    description: 'love programming'
  },
  jin: {
    name: 'Jin',
    description: 'super designer'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>User not exist</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample/>
    </div>
  );
};

export default Profile;
