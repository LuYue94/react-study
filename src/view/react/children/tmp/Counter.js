import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        start: 0,
        step: 1,
        name: '计数器',
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: '',
        };
    }

    componentDidMount() {
        this.setState({
            counter: this.props.start,
            name: `${this.props.name}
        start:${this.props.start}
        step:${this.props.step}`,
        });
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(function (prevState, props) {
            return {
                counter: ~~prevState.counter + ~~props.step,
            };
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.name + ' : ' + this.state.counter}</p>
            </div>
        );
    }
}

export default Counter;
