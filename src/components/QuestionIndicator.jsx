import React, { Component } from 'react';
import clsx from 'clsx';
import AutofillIcon from "../assets/autofill-icon";
import { Link } from 'react-router-dom';

export default class QuestionIndicator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      number,
      isFocused,
      isEvidenceLoading,
      isEvidenceLoaded,
      isEvidenceLoadError,
      isAutofillLoading,
      isAutofillLoaded,
      isAutofillLoadError,
      autofillLoadError,
      autofillId,
      activityId,
      groupSlug,
      questionSlug
    } = this.props;

    const classes = clsx(
      isFocused && 'is-focus',
      (isEvidenceLoading || isAutofillLoading) && 'is-loading',
      // (isAutofillLoadError && !isEvidenceLoading) && 'is-warning',
      // NOTE: I think Autofill Icon satisfies "warning state" currently;
      isEvidenceLoadError && 'is-error'
    );

    const autofillStatus = clsx(
      isAutofillLoading && 'loading',
      isAutofillLoaded && 'loaded',
      isAutofillLoadError && 'error'
    )

    const autofillColorMap = {
      loaded: "#bdbdbd",
      error: "#ffdd57"
    }

    return (
      <div className={`question-indicator ${classes}`}>
        <div className="question-indicator-bubble">
          <div className="question-indicator-bubble-border"></div>
          <div className="question-indicator-bubble-content">{number}</div>
          {/* AutofillIcon positioned relative to question-indicator-bubble */}
          {autofillId &&
            <div
              onClick={(e, p) => this.props.onSmartyClick(e, p)}
              style={{borderColor: `${autofillColorMap[autofillStatus]}`}}
              className="autofill-icon-container">
              <AutofillIcon
                className="autofillIcon"
                color={autofillColorMap[autofillStatus]}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}
