import React, { Component } from 'react';
import Question from './Question';

export default class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayQuestions: props.questions
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.group !== this.props.group) {
      const { questions, group } = this.props;
      let tmpQuestions = [];

      if (group) {
        for (let q of questions) {
          if (q.group === group) {
            tmpQuestions.push(q);
          }
        }
      } else {
        tmpQuestions = questions;
      }

      this.setState({
        displayQuestions: tmpQuestions
      });
    }
  }

  render() {
    const { handleQuestionChange, selectedQuestion } = this.props;
    const { displayQuestions } = this.state;

    return (
      <div className='questions'>
        {displayQuestions.map(q => {
          return (
            <Question
              key={'question' + q.question_number}
              question={q}
              active={q === selectedQuestion}
              handleQuestionChange={handleQuestionChange}
            />
          );
        })}
      </div>
    );
  }
}
