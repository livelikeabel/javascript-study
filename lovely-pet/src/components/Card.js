import React from 'react';

const Card = ({ imageUrl,age,name,gender }) => {
  return (<div>
    <img src={imageUrl} />
    <p>name: {name}</p>
    <p>age: {age}</p>
    <p>gender: {gender}</p>
  </div>)
}

export default Card;