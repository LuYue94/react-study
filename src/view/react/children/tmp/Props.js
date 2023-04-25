import React, { Component } from 'react';
import Counter from '../../../components/Counter';

class Props extends Component {
    render() {
        return (
            <div>
                <h1>
                    <span>props</span>不可变
                </h1>
                <h1>
                    <span>defaultProps</span>配置默认props
                </h1>
                <Counter name="计数器1" start="1" step="1" />
                <Counter name="计数器2" start="2" step="3" />
                <Counter name="计数器3" start="3" step="2" />
            </div>
        );
    }
}

export default Props;
