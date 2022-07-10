import './App.scss';
import TimeChecker from './components/TimeChecker'
import React from 'react';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue:Math.floor(Date.now()/1000)
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Please type your time in Timestampx format:</h1>
        <input type="number" className='main-input' value={this.state.inputValue} onChange={this.handleChange} />
          <TimeChecker lastSeen={this.state.inputValue}/>
      </header>
    </div>
  );
}
}
export default App;
