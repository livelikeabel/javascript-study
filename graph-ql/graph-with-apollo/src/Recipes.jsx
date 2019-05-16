import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const recipesQuery = gql`
 query recipes($vegetarian: Boolean!) {
  recipes(vegetarian: $vegetarian) {
    id
    title
  }
}
`;

export default function Recipes() {

  const [vegetarian, setVegetarian] = useState(false);

  const updateVegetarian = ({ target: { checked } }) => {
    setVegetarian(checked);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={vegetarian}
          onChange={updateVegetarian}
        />
        <span>vegetarian</span>
      </label>
      <Query query={recipesQuery} variables={{ vegetarian }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Something went wrong</p>;

          return (
            <ul>
              {data.recipes.map(({ id, title }) =>
                <li key={id}>{title}</li>
              )}
            </ul>
          )
        }}
      </Query>
    </>
  )
}