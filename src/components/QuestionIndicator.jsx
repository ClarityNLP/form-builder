import React, { Component } from 'react';
import clsx from 'clsx';

export default class QuestionIndicator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { question, isFocused } = this.props;

    const classes = clsx(isFocused && 'is-focus'); //TODO for to add here...

    return (
      <div className={`question-indicator ${classes}`}>
        <div className="question-indicator-bubble">
          <div className="question-indicator-bubble-border"></div>
          <div className="question-indicator-bubble-content">{question.number}</div>
        </div>
      </div>
    )
  }
}
