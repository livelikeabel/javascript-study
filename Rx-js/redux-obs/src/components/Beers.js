import React from 'react';

export function Beers({ beers, loading }) {

  return (
    <div className="Beer-List">
      <h3>Search Results: ({beers.length}) {loading && <img src="https://rawgit.com/eggheadio-projects/up-and-running-with-redux-observable/aa156d8009629b5d01b6aa76948380c055772f77/Lesson-07/public/ajax-loader.gif" />}</h3>
      {beers.length > 0 && (
        <ul>
          {beers.map(beer => (
            <li key={beer.id} className="Beer">
              <figure className="Beer-Image"><img src={beer.image_url} alt=""/></figure>
              <p>{beer.name} <small>{beer.tagline}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
