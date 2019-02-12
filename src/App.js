import React, { Component } from 'react';
import './App.css';
import {observer,inject} from 'mobx-react';
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import TodoMenu from './components/TodoMenu'

class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <TodoEntry/>
        <TodoItems/>
        <TodoMenu />




          {/* <img onClick={()=> this.props.store.changemsg()} src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.store.s_item.msg}
          </p>
          <div>{this.props.store.s_item.time}</div>
          <div>
            <button onClick={()=> this.props.store.pauseClock()}>pause</button>     
            <button onClick={()=> this.props.store.startClock()}>start</button>
          </div> */}
        
      </div>
    );
  }
}

export default inject('store')(observer(App));
