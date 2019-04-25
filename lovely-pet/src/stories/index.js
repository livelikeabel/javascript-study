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
// 스크롤 내리면, showingCard 숫자늘려주기, 그래서 더 보여주기.

storiesOf('Header', module)
  .add('when render', () => (
    <Header
      name="냥이와 댕댕"
      onClickAnimalType={action('handleChangeAnimalType')}
    />
  ))

storiesOf('Loading', module)
  .add('default(isLoading true)', () => <Loading />)
  .add('when isLoading false', () => <Loading isLoading={false} />)


// 폰트어썸을 못불러오고 있다... ㅠ
// animalData가 dog이고, gender가 male일 때 case추가 하기
storiesOf('Card', module)
  .add('reder(cat, female)', () => {
    return <Card {...animalData['cat'][0]} />
  });

storiesOf('App', module)
  .add('render', () => <App />)
  .add('click dog', () => {
    // state의 animalType을 dog로 바꿔주어야 한다...
    return <App />
  })