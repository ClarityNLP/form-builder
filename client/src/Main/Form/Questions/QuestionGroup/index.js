import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import Question from './Question';

export default class QuestionGroup extends Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    const {
      group,
      questions,
      handleQuestionChange,
      selectedQuestion
    } = this.props;

    return (
      <div className='question-group'>
        <Button color='secondary' onClick={this.toggle} block>
          {group}
        </Button>

        <Collapse isOpen={this.state.collapse}>
          {questions.map((question, i) => {
            return (
              <Question
                handleQuestionChange={handleQuestionChange}
                key={'question' + i}
                question={question}
                active={selectedQuestion === question}
              />
            );
          })}
        </Collapse>
      </div>
    );
  }
}
