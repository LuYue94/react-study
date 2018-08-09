import React from "react";

function showChildrenIndex(children, index) {
  return children.map(function (val, i, item) {
    if (val.props.name === 'child' + index) {
      return val
    } else {
      return null
    }
  })
};

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      index: 1
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  show(index, event) {
    console.log(index)
    this.setState({
      index: index
    })
  }

  render() {
    return (
      <div>
        选择一个子元素显示：
        <button onClick={this.show.bind(this, 1)}>1</button>
        <button onClick={(e) => { this.show(2, e) }}>2</button>
        <button onClick={this.show.bind(this, 3)}>3</button>
        {showChildrenIndex(this.props.children, this.state.index)}
      </div>
    )
  }
}

export default Parent