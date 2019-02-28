import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import {ajax} from 'rxjs/observable/dom/ajax';

import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics/index';
import {Observable} from 'rxjs';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    ajax
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
