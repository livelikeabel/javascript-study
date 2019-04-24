import React from 'react';
import './Card.scss';
import { getRendomColor } from '../utils';

const GENDER = { female: 'venus', male: 'mars' };

const Card = ({ imageUrl, age, name, gender }) => {
  return (
    <div className="Card">
      <div className="Card__inner-wrapper">
        <div
          className="Card__img-background"
          style={{ backgroundColor: getRendomColor() }}
        >
          <img src={imageUrl} alt='animal' />
        </div>
        <div className="Card__info">
          <p>{name}</p>
          <span>{age} years</span>
          <i className={`fas fa-${GENDER[gender]}`} />
        </div>
      </div>
    </div>
  )
}

export default Card;