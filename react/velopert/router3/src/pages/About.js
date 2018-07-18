import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const firstName = query.firstName === 'ko'

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {firstName && `First name is 'Ko'`}
        </div>
    );
};

export default About;