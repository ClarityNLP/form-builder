import React, { Component } from 'react';

export default class Evidence extends Component {
  render() {
    const { selectedQuestion } = this.props;

    return (
      <div className='evidence'>
        <h3>Evidence for Question: {selectedQuestion.question_number}</h3>
      </div>
    );
  }
}
