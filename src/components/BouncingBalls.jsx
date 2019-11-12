import React, { Component } from 'react';

export default class BouncingBalls extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="b-container">
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>
    )
  }
}
