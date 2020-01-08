import React, { Component } from "react";
import { Field } from "formik";
import Question from './Question';
import { withRouter } from 'react-router-dom';
import idx from 'idx';
import queryString from 'query-string'

class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  // <div>
  //   <Field type="text" name={questionSlug} placeholder="Email" />
  // </div>

  //TODO handle on click for <QuestionWrapper>...just push to new route q/ questionSlug on end...

  onQuestionClick = (questionSlug, groupSlug, formSlug) => {
    this.props.push(`/app/f/${formSlug}/g/${groupSlug}/q/${questionSlug}`)
  }

  componentDidMount(){
    const {
      questionsAllIds,
      groupSlug,
      formSlug,
      match,
      location
    } = this.props;

    const questionSlug = idx(match, _ => _.params.questionSlug);
    const { isLast } = queryString.parse(location.search, {parseBooleans: true});

    if (!questionSlug) {
      isLast ? (
        this.props.push(`/app/f/${formSlug}/g/${groupSlug}/q/${questionsAllIds[questionsAllIds.length - 1]}`)
      ) : (
        this.props.push(`/app/f/${formSlug}/g/${groupSlug}/q/${questionsAllIds[0]}`)
      )
    }
  }

  //todo when questionSlug param updates...

  render() {
    const {
      questionsAllIds,
      formSlug,
      groupSlug,
      match
    } = this.props;

    const questionSlugFromPath = idx(match, _ => _.params.questionSlug);

    return (
      <React.Fragment>
        {questionsAllIds.map((questionSlug, index) => {
          return (
            <Question
              key={index}
              onQuestionClick={() => this.onQuestionClick(questionSlug, groupSlug, formSlug)}
              isFocused={questionSlug === questionSlugFromPath}
              questionSlug={questionSlug}
              groupSlug={groupSlug}
            />
          )
        })}
      </React.Fragment>
    )
  }
}

export default withRouter(FormPage);
