import React, { Component } from 'react';
import QuestionIndicator from '../containers/question_indicator_container';
import QuestionContent from '../containers/question_content_container';

export default class Question extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      groupSlug,
      questionSlug,
      isFocused
    } = this.props;

    return (
      <div className="question-block" onClick={this.props.onQuestionClick}>
        <QuestionIndicator
          isFocused={isFocused}
          groupSlug={groupSlug}
          questionSlug={questionSlug}
        />
        <QuestionContent
          groupSlug={groupSlug}
          questionSlug={questionSlug}
        />
      </div>
    )
  }
}
