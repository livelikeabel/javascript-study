import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider, Query } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello</div>
      <Query
        query={gql`
          {
            recipes {
              id
              title
            }
          }
        `}
      >
        {({ data }) => {
          if (data.recipes === undefined) return null;

          return (
            <ul>
              {data.recipes.map(({ id, title }) =>
                <li key={id}>{title}</li>
              )}
            </ul>
          )
        }}
      </Query>
    </ApolloProvider>
  )
}

export default App;
