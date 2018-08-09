import React, { Component } from 'react';
import Highlight from 'react-highlight'

class Lifecycle extends Component {
  render() {
    return (
      <div>
        <h1><span>Mounting</span>装配</h1>
        <h2>constructor()</h2>
        <h2>static getDerivedStateFromProps()</h2>
        <h2>render()</h2>
        <h2>componentDidMount()</h2>

        <hr />
        <h1><span>Updating</span>更新</h1>
        <h2>static getDerivedStateFromProps()</h2>
        <h2>shouldComponentUpdate()</h2>
        <h2>render()</h2>
        <h2>getSnapshotBeforeUpdate()</h2>
        <h2>componentDidUpdate()</h2>

        <hr />
        <h1><span>Unmounting</span>卸载</h1>
        <h2>componentWillUnmount()</h2>

        <hr />
        <h1><span>Error Handing</span>错误处理</h1>
        <h2>componentDidCatch()</h2>

        <hr />
        <h1><span>Other APIs</span>其他API</h1>
        <h2>setState()</h2>
        <h2>forceUpdate()</h2>
        <h1><span>Class Properties</span>类属性</h1>
        <h2>defaultProps</h2>
        <h2>displayName</h2>
        <h1><span>Instance Properties</span>实例属性</h1>
        <h2>props</h2>
        <h2>state</h2>



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

export default Lifecycle;