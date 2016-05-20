import React from 'react';
import Index from './components/Index/component.js';
import AddTask from './components/AddTask/component.js';
import {Locations, Location} from 'react-router-component';

export default class Router extends React.Component {
  render() {
    return (
      <Locations className='router__wrapper'>
        <Location path="/" handler={Index}/>
        <Location path="/addtask" handler={AddTask}/>
      </Locations>
    )
  }
}
