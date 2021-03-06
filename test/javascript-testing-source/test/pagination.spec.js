import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {init} from '../src/pagination/albums';
import {
  waitForDomChange,
  getByText,
  getByTestId,
  getAllByTestId,
  queryByText,
  fireEvent
} from '@testing-library/dom';

const mockAlbums = [
  {
    id: 4,
    name: 'Her Song',
    artist: 'She',
    release: '2018.01.31'
  },
  {
    id: 3,
    name: 'My Song',
    artist: 'Me',
    release: '2018.01.01'
  },
  {
    id: 2,
    name: 'Your Song',
    artist: 'You',
    release: '2018.02.01'
  },
  {
    id: 1,
    name: 'His Song',
    artist: 'He',
    release: '2018.03.01'
  }
];

const FETCH_URL = 'http://localhost:3000/albums';
const mockAxios = new MockAdapter(axios);

it('초기화시 첫번째 페이지를 로드해서 렌더링한다', async () => {

});

it('페이지 변경시 해당 페이지의 데이터를 로드해서 렌더링하고, 페이지 번호의 상태를 변경한다', async () => {

});
