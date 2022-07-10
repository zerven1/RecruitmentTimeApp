import './index.scss'
import React from 'react';

class TimeChecker  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Math.floor(Date.now()/1000),
      result:0,
      interval:1000
    } 
  }
  updateTime = () => {
    this.setState(
      { 
        time: Math.floor(Date.now()/1000),
        result: this.state.time - this.props.lastSeen
      }
    );
  };

  updateTimeRecursively() {
    this.updateTime();
    this.state.time - this.props.lastSeen<60 ? this.setState({interval:1000}):this.setState({interval:60000});
    setInterval(this.updateTime, this.state.interval)
  }

  componentDidMount = () => {
    this.updateTimeRecursively();
  };
    render() {
      return (
      <div>
        <h1 >{(this.state.result <0?"Invalid Variable! Time must be greater than 0! ":this.state.result <60 ? this.state.result+" seconds ago":(Math.floor(this.state.result/60))+" minutes ago")}</h1>
      </div>)
    }
    
  }


export default TimeChecker