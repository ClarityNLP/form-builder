import React, { PureComponent } from 'react';
import QuestionIndicator from '../containers/question_indicator_container';
import QuestionContent from '../containers/question_content_container';
import queryString from 'query-string';
import SVGFile from "../assets/autofill-icon";
import isEqual from 'lodash/isEqual';
import deep_diff from 'deep-diff';

export default class Question extends PureComponent {

  constructor(props) {
    super(props);
  }

  scrollTo = (ref, behavior) => {
    ref.current.scrollIntoView({
      behavior: behavior || 'auto',
      block: 'center',
    });
  }

  onQuestionClick = (e, {questionSlug, groupSlug, activityId}) => {
    this.props.push(`/app/a/${activityId}/g/${groupSlug}/q/${questionSlug}?scrollBehavior=smooth`)
  }

  onSmartyClick = (e, {questionSlug, groupSlug, activityId}) => {
    e.stopPropagation();
    this.props.push(`/app/a/${activityId}/g/${groupSlug}/q/${questionSlug}/autofill`)
  }

  componentDidMount() {
    const { scrollBehavior } = queryString.parse(this.props.search, {parseBooleans: true});
    if (this.props.isFocused) {
      this.scrollTo(this.props.forwardedRef, scrollBehavior);
    }
  }

  componentDidUpdate(prevProps) {
    const { scrollBehavior } = queryString.parse(this.props.search, {parseBooleans: true});
    if (this.props.isFocused) {
      this.scrollTo(this.props.forwardedRef, scrollBehavior);
    }
  }

  render() {
    const {
      activityId,
      groupSlug,
      questionSlug,
      isFocused,
      forwardedRef
    } = this.props;

    return (
      <div
        className="question-block"
        onClick={(e) => this.onQuestionClick(e, {...this.props})}
        ref={forwardedRef}
      >
        <QuestionIndicator
          onSmartyClick={(e) => this.onSmartyClick(e, {...this.props})}
          isFocused={isFocused}
          groupSlug={groupSlug}
          questionSlug={questionSlug}
          activityId={activityId}
        />
        <QuestionContent
          groupSlug={groupSlug}
          questionSlug={questionSlug}
        />
      </div>
    )
  }
}
