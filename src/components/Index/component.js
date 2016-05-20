import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="indexPage">
        <a href='/addtask'>Добавить задание</a>
        <div className={'index__tasks'}>
          <h1>Задания</h1>
        </div>
      </div>
    )
  }
}
