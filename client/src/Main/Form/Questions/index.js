import React, { Component } from 'react';
import QuestionGroup from './QuestionGroup';

export default class Questions extends Component {
  render() {
    const {
      groups,
      questions,
      handleQuestionChange,
      selectedQuestion
    } = this.props;

    return (
      <div className='questions'>
        {groups.map((group, i) => {
          return (
            <QuestionGroup
              key={'group' + i}
              group={group}
              handleQuestionChange={handleQuestionChange}
              selectedQuestion={selectedQuestion}
              questions={questions.filter(question => {
                return question.group === group;
              })}
            />
          );
        })}
      </div>
    );
  }
}
