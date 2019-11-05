import React, { Component } from 'react';

export default class Transient extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="transient">
        <div className="is-loading">
          <div className="b-container">
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </div>
        </div>
      </div>
    );
  }
}
