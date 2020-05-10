import React from 'react';
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./withRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };
  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to={'/profiles/abel'}>abel</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to={'/profiles/jin'}>jin</NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요</div>}/>
      <Route path="/profiles/:username" component={Profile}/>
      {/*<WithRouterSample/>*/}
    </div>
  );
};

export default Profiles;
