import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. something cool
          </p> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, minutes:0, allSeconds:0};
  }

  tick() {
    this.setState(state => ({
      seconds: state.allSeconds == 60 ? 0 : state.seconds + 1,
      minutes: parseInt(new Number(state.allSeconds/60)),
      allSeconds: state.allSeconds + 1

    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}, Minutes: {this.state.minutes}, Total Seconds: {this.state.allSeconds}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
