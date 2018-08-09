import React, { Component } from 'react';
import Highlight from 'react-highlight'
import Clock from '../../../components/Clock'

class State extends Component {
  render() {
    return (
      <div>
        <Clock />
        <br />
        <h1><span>state</span>state 是让组件控制自己的状态</h1>
        <h1><span>props</span>是让外部对组件自己进行配置</h1>
        <hr />
        <h2>setState:</h2>
        <Highlight language="javascript">
          {`
  // 1：接受一个对象
  this.setState({comment: 'Hello'});
  
  // 2：接受一个函数
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }));
  `}
        </Highlight>
      </div>
    )
  }
}

export default State;