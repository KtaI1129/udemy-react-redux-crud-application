import React, { Component } from 'react';

const App = () => {
  return (
    <Counter count={0}></Counter>
  )
}

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {count: props.count}
  }

handlePlus = () => {
  this.setState({count: this.state.count + 1});
}

handleMinus = () => {
  this.setState({count: this.state.count - 1});
}

  render() {
    console.log("setStateでrenderが発火する");
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlus}>++</button>
        <button onClick={this.handleMinus}>--</button>
      </React.Fragment>
    );
  }
}

export default App;
