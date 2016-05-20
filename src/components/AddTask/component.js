import React from 'react';

export default class AddTask extends React.Component {
  render() {
    return (
      <div className={'add__task__page'}>
        <h1>Добавить задание</h1>
        <form action='/addtask'>
          <label>Название</label>
          <input type='text'></input>
        </form>
      </div>
    )
  }
}
