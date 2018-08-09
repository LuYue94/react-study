import React from "react"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      data: new Date()
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.data.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock