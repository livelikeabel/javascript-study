import React from 'react';

const Card = ({ imageUrl,age,name,gender }) => {
  console.log(imageUrl)
  return (<div>
    <img src={imageUrl} alt='animal'/>
    <p>name: {name}</p>
    <p>age: {age}</p>
    <p>gender: {gender}</p>
  </div>)
}

export default Card;