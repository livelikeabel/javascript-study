import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../components/Header';
import List from '../components/List';
import Loading from '../components/Loading';
import Card from '../components/Card';
import App from '../App';

import animalData from '../../mock-data/db.json';

storiesOf('List', module)
  .add('is loading..', () => <List animalData={[]} />)
  .add('with animalData(cat)', () => (
    <List animalData={animalData["cat"]} />
  ))
  .add('with animalData(dog)', () => (
    <List animalData={animalData["dog"]} />
  ))

const headerProps = {
  name: "냥이와 댕댕",
  onClickAnimalType: action('handleChangeAnimalType')
}

storiesOf('Header', module)
  .add('when render', () => <Header {...headerProps} />)
  .add('select cat', () => (
    <Header animalType="cat" {...headerProps} />
  ))
  .add('select dog', () => (
    <Header animalType="dog" {...headerProps} />
  ))

storiesOf('Loading', module)
  .add('default(isLoading true)', () => <Loading />)
  .add('when isLoading false', () => <Loading isLoading={false} />)


storiesOf('Card', module)
  .add('reder(cat, female)', () => {
    return <Card {...animalData['cat'][0]} />
  });

storiesOf('App', module)
  .add('render', () => <App />)