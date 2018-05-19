import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    //location - 현재 경로에 대한 정보를 지니고 있는 url쿼리 정보를 가지고 있다.
    const query = queryString.parse(location.search);
    const birthBoolean = (query.birth === "1129" ? true : false);

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {birthBoolean && 'give me gift! kkkk'}
        </div>
    );
};

export default About;