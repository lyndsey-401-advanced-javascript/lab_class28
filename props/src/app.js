import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: " name ", 
    };
  }

  handleChangedName = (propWithNewName) => {
    this.setState(previousState => {
      
    })

  }

  render() {
    return (
      <div>
        <h1> {this.state.count}.</h1>
        <h2> {this.state.name} </h2>
      </div>
    );
  }
}

export default App;