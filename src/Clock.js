import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      dateTime: new Date(),
      color: 'green'
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    console.log('Created a new instance of Clock');
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    console.log('Did somebody call for a big blue superhero!');
    this.setState({
      dateTime: new Date()
    });
  }

  render() {
    let time = this.state.dateTime.toLocaleTimeString();
    let formattedDate = this.state.dateTime.toLocaleDateString();

    return (
      <div>
        <h2>{time}</h2>
        <div>on</div>
        <h3>{formattedDate}</h3>
      </div>
    );
  }
}

export default Clock;
