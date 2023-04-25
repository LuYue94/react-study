import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Parent from '../../../components/Parent';
import Counter from '../../../components/Counter';

class Events extends Component {
    render() {
        return (
            <div>
                <h1>如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 React.js</h1>
                <hr />
                <h2>组件分发：</h2>
                <Highlight language="javascript">
                    {`
  <Parent>
    <Counter name="child1" start="4" step="1" />
    <Counter name="child2" start="5" step="3" />
    <Counter name="child3" start="6" step="2" />
  </Parent>
  `}
                </Highlight>
                <Parent>
                    <Counter name="child1" start="4" step="1" />
                    <Counter name="child2" start="5" step="3" />
                    <Counter name="child3" start="6" step="2" />
                </Parent>
                <hr />
                <h2>向事件处理程序传递参数:</h2>
                <Highlight language="javascript">
                    {`
  // 1：arrow functions
  // 事件 显式 传递
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  
  // 2：Function.prototype.bind
  // 事件 隐式 传递，事件对象 e 在传递参数后面
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  `}
                </Highlight>
            </div>
        );
    }
}

export default Events;
