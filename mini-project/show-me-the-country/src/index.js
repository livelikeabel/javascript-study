import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks';
import rootEpic from './epics';
import App from './app/App.jsx';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )
);
epicMiddleware.run(rootEpic);

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);

render(App);

if (module.hot) module.hot.accept('./app/App.jsx', () => render(App));