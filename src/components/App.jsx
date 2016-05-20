import React, { Component } from 'react';
import Router from './routes.js';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <Provider store={store}>
          <Router />
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}
