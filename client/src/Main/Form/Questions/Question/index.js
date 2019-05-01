import React, { Component } from 'react';

export default class Question extends Component {
  render() {
    const { question, active, handleQuestionChange } = this.props;

    return (
      <div
        onClick={() => {
          handleQuestionChange(question);
        }}
        className={active ? 'question active' : 'question'}
      >
        <span>{question.question_number}. </span>
        {question.question_name}
      </div>
    );
  }
}
