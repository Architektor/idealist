import React, { Component } from 'react';
import Router from './routes.js';

export default class App extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <Router />
      </div>
    );
  }
}
