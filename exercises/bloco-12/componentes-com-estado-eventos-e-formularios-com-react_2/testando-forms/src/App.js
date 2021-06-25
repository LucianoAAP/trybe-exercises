import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      inInput: '',
    }
  }

  handleInput({target}) {
    this.setState({ inInput: target.value });
  }

  render() {
    return (
      <form>
        <select></select>
        <input type='checkbox' />
        <input onChange={this.handleInput} value={this.state.inInput} />
      </form>
    );
  }
}

export default App;
