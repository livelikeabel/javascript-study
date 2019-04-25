import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Header from '../components/Header';
import List from '../components/List';
import Loading from '../components/Loading';

import animalData from '../../mock-data/db.json';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('List', module)
  .add('is loading..', () => <List animalData={[]} />)
  .add('with animalData', () => (
    <List animalData={animalData["cat"]} />
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
  .add('default(isLoading true)', () => <Loading/>)
  .add('when isLoading false', () => <Loading isLoading={false}/>)