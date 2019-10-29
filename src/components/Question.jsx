import React, { Component } from 'react';

export default class Question extends Component {

  constructor(props) {
    super(props);
  }

  renderQuestion = (question) => {
    switch (question.question_type) {
      case 'MULTIPLE_CHOICE': {
        return (
          <div className="control">
            {question.answers.map((answer, index) =>
              <label className="radio">
                <input type="radio" name="answer"/>
                {answer.text}
              </label>
            )}
          </div>
        );
      }
      case 'MC': {
        return (
          <div className="control">
            {question.answers.map((answer, index) =>
              <label className="radio">
                <input type="radio" name="answer"/>
                {answer.text}
              </label>
            )}
          </div>
        );
      }
      case 'DATE': {
        return (
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Enter date."/>
            </div>
          </div>
        );
      }
      case 'TEXT': {
        return (
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Enter text."/>
            </div>
          </div>
        );
      }
      default: {
        return (
          <span>Unknown Question Type: {question.question_type}</span>
        )
      }
    }
  }

  render() {
    return (
      <div className="question-content">
        <h1 className="question-name">{this.props.question.question_name}</h1>
        {this.renderQuestion(this.props.question)}
      </div>
    )
  }
}
