import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "  ", 
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
        <Form />
      </div>
    );
  }
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: " Name ",
    }
  }

  //handle submission action 
  //change the UI state
  //update app state
  //increment counter

  handleUiChange = event => {
    this.setState({
      name: event.target.value,
    }, () => {
      this.props.handleNameChange({
        name: this.state.name,
        count: this.state.count,
      });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleNameChange({
      name: this.state.name,
      count: this.state.count,
    })

  }
    
    render() {
      return (
        <form>
      <input
      type = "text"
      value = {this.state.name}
      onChange = {this.handleUiChange}
      />
      <button type="submit" value="Submit"> Change {this.state.name}</button>
      </form>
    );
  }
}

export default App;