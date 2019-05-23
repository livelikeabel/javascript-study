import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './ducks';
import App from './App.jsx';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);

render(App);

if (module.hot) module.hot.accept('./App.jsx', () => render(App));