import React, { Component } from 'react';

class App extends Component {
  render(){
    const dom = (
      <React.Fragment>
        <input type="text" onChange={() => {console.log("Hi!!!")}}></input>
        <h1>fuck you</h1>
      </React.Fragment>
    );
    return dom;
  }
}

export default App;
