import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello</div>
      <ApolloConsumer>
        {client => {
          client
            .query({
              query: gql`
                {
                  recipes {
                    id
                    title
                  }
                }
              `
            })
            .then(result => console.log(result))
            return null;
        }}
      </ApolloConsumer>
    </ApolloProvider>
  )
}

export default App;
