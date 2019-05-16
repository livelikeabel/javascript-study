import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      Hello
      <AddRecipe />
      <Recipes />
    </ApolloProvider>
  )
}

export default App;
