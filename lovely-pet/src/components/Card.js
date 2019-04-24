import React from 'react';
import './Card.scss';
import { getRendomColor } from '../utils';

const Card = ({ imageUrl,age,name,gender }) => {
  return (
    <div className="Card">
      <div
        className="Card img-background"
        style={{ backgroundColor: getRendomColor() }}
      >
        <img src={imageUrl} alt='animal' />
      </div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </div>
  )
}

export default Card;