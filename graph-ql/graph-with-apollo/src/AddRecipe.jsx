import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import recipesQuery from './recipesQuery'

const addRecipeMutation = gql`
  mutation addRecipe($recipe: RecipeInput!) {
    addRecipe(recipe: $recipe) {
      id
      title
    }
  }
`

const AddRecipe = () => {
  const [title, setTitle] = useState([''])
  const [vegetarian, setVegetarian] = useState(false)

  const updateVegetarian = ({ target: { checked } }) => {
    setVegetarian(checked)
  }

  const updateTitle = ({ target: { value } }) => {
    setTitle(value)
  }

  const resetFields = () => {
    setVegetarian(false);
    setTitle('')
  }

  return (
    <Mutation
      mutation={addRecipeMutation}
      refetchQueries={[
        {
          query: recipesQuery,
          variables: { vegetarian: true }
        },
        {
          query: recipesQuery,
          variables: { vegetarian: false }
        }
      ]}
      awaitRefetchQueries={true}
    >
      {(addRecipe, { loading, error }) => (
        <form onSubmit={e => {
          e.preventDefault();
          addRecipe({
            variables: {
              recipe: {
                title,
                vegetarian
              }
            }
          })
          resetFields();
        }}>
          <label>
            <span>Title</span>
            <input type="text" value={title} onChange={updateTitle} />
          </label>
          <label>
            <input type="checkbox" checked={vegetarian} onChange={updateVegetarian} />
            <span>vegetarian</span>
          </label>
          <div>
            <button>Add Recipe</button>
          </div>
          {loading && <p>Adding a recipe - please wait...</p>}
          {error && <p>Error : ( Please try again</p>}
        </form>
      )}
    </Mutation>
  )
}

export default AddRecipe;