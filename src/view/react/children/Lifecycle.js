import React, { Component } from 'react';

const AStyle = {
  textDecoration: 'underline',
  padding: '10px',
  display: 'block'
}

class Lifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
    this.stateChange = this.stateChange.bind(this)
    this.fnForceUpdate = this.fnForceUpdate.bind(this)
    console.group('%c lifecycle', 'color:blue')
    console.log('%c constructor', 'color:red');

  }

  stateChange() {
    console.log('%c setState', 'color:red');

    this.setState(function (prevState, props) {
      return {
        num: ~~prevState.num + 1
      }
    })
  }

  fnForceUpdate() {
    console.log('%c fnForceUpdate', 'color:red');
    this.forceUpdate()
  }

  static getDerivedStateFromProps(props, state) {
    console.log('%c getDerivedStateFromProps', 'color:red');
    console.log('props', props)
    console.log('state', state)
    return true

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%c shouldComponentUpdate', 'color:red');
    console.log('nextProps', nextProps)
    console.log('nextState', nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('%c getSnapshotBeforeUpdate', 'color:red');
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    return true

  }

  componentDidMount() {
    console.log('%c componentDidMount', 'color:red');
    console.log('%c ------------------', 'color:blue')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('%c componentDidUpdate', 'color:red');
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('snapshot', snapshot)

    console.log('%c ------------------', 'color:blue')

  }

  componentWillUnmount() {
    console.log('%c componentWillUnmount', 'color:red');

  }

  render() {

    console.log('%c render', 'color:red');


    return (
      <div>
        <a style={AStyle} href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank">生命周期图示</a>

        <div>
          <h1><span>在控制台查看lifecycle</span></h1>
          {this.state.num}
          <button onClick={this.stateChange}>setState()</button>
          <button onClick={this.fnForceUpdate}>forceUpdate()</button>
        </div>


        <hr />
        <h1><span>Mounting</span>装配</h1>
        <h2>constructor()</h2>
        <p>1.初始化state</p>
        <p>2.绑定事件</p>
        <p>3.不要在constructor() 里面 setState(props, state)</p>
        <h2>render()</h2>
        <h2>componentDidMount()</h2>
        <p>在这里调用 setState() 会触发一次额外的渲染</p>
        <p>发布订阅</p>
        <p>网络请求</p>

        <hr />
        <h1><span>Updating</span>更新</h1>
        <h2>static getDerivedStateFromProps(props, state)</h2>

        <h2>shouldComponentUpdate(nextProps, nextState)</h2>

        <h2>render()</h2>
        <h2>getSnapshotBeforeUpdate(prevProps, prevState)</h2>
        <h2>componentDidUpdate(prevProps, prevState, snapshot)</h2>
        <p>适合操作DOM，发送请求</p>


        <hr />
        <h1><span>Unmounting</span>卸载</h1>
        <h2>componentWillUnmount()</h2>

        <hr />
        <h1><span>Error Handing</span>错误处理</h1>
        <h2>componentDidCatch(error, info)</h2>

        <hr />
        <h1><span>Other APIs</span>其他API</h1>
        <h2>setState()</h2>
        <p>setState(updater, callback)</p>
        <p>setState源码中将一个需要改变的变化存放到组件的state对象中，采用队列处理</p>
        <p>不是立刻更新组件，因此，如果想获取setState()后的state，使用callback或者componentDitUpdate()</p>
        <h2>forceUpdate()</h2>
        <p>会调用 render()，且跳过 shouldComponentUpdate()</p>
        <h1><span>Class Properties</span>类属性</h1>
        <h2>defaultProps</h2>
        <h2>displayName</h2>
        <h1><span>Instance Properties</span>实例属性</h1>
        <h2>props</h2>
        <h2>state</h2>


      </div>

    )
  }
}

export default Lifecycle;