import React, { Component } from 'react';
import QuestionIndicator from '../containers/question_indicator_container';
import QuestionContent from '../containers/question_content_container';
import queryString from 'query-string';
import SVGFile from "../assets/autofill-icon";

export default class Question extends Component {

  constructor(props) {
    super(props);
  }

  scrollTo = (ref, behavior) => {
    ref.current.scrollIntoView({
      behavior: behavior || 'auto',
      block: 'center',
    });
  }

  onQuestionClick = ({questionSlug, groupSlug, activityId}) => {
    this.props.push(`/app/a/${activityId}/g/${groupSlug}/q/${questionSlug}?scrollBehavior=smooth`)
  }

  componentDidMount() {
    const { scrollBehavior } = queryString.parse(this.props.location.search, {parseBooleans: true});
    if (this.props.isFocused) {
      this.scrollTo(this.props.forwardedRef, scrollBehavior);
    }
  }

  render() {
    const {
      groupSlug,
      questionSlug,
      isFocused,
      onQuestionClick,
      forwardedRef
    } = this.props;

    return (
      <div
        className="question-block"
        onClick={() => this.onQuestionClick({...this.props})}
        ref={forwardedRef}
      >
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
