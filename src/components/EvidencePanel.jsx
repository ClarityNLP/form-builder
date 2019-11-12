import React, { Component } from 'react';
import Evidence from './Evidence';
import idx from 'idx';
import BouncingBalls from './BouncingBalls';

export default class EvidencePanel extends Component {

  constructor(props) {
    super(props);
  }

  renderEvidenceContent = () => {
    const { focusQuestion, evidence, content } = this.props;

    if (!content) {
      return (
        <div className="is-loading">
          <BouncingBalls/>
        </div>
      )
    }

    if (!focusQuestion) {
      return (
        <span>Waiting for question to be focused...</span>
      )
    }

    const question = content.questions.find(q => q.question_number === focusQuestion);

    if (!question) {
      return (
        "Could not find question with selected question number."
      )
    }

    const oneEvidence = idx(question, _ => _.nlpql_grouping);

    if (!oneEvidence) {
      return (
        <div className="message is-primary">
          <div className="message-body">
            Question does not have an evidence bundle.
          </div>
        </div>
      )
    }

    const expandedEvidence = evidence[oneEvidence];

    if (!expandedEvidence || expandedEvidence.isLoading) {
      return (
        <div className="is-loading">
          <BouncingBalls/>
        </div>
      )
    }

    if (expandedEvidence.isLoaded) {
      return (
        <React.Fragment>
          {expandedEvidence.results.length === 0 &&
            <div class="message is-primary">
              <div class="message-body">
                No issues, but evidence bundle is empty.
              </div>
            </div>
          }
          {expandedEvidence.results.length > 0 &&
            <React.Fragment>
            {expandedEvidence.results.map((result, index) => {
              if (result.result_display) {
                return <Evidence key={index} evidence={result} />;
              }
            })}
            </React.Fragment>
          }
        </React.Fragment>
      )
    }

    return (
      <div className="message is-danger">
        <div className="message-body">
          Problem loading evidence bundle: {expandedEvidence.errorMessage}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="evidence-panel">
        <div className="evidence-filter">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <label className="label is-small">Start date</label>
              <input className="input is-small is-primary" type="text" placeholder="mm/dd/yy"/>
            </p>
            <p className="control is-expanded">
              <label className="label is-small">End date</label>
              <input className="input is-small is-primary" type="text" placeholder="mm/dd/yy"/>
            </p>
            <p className="control">
              <a className="button is-primary is-outlined is-small">
                Filter
              </a>
            </p>
          </div>
        </div>
        <div className="evidence-content">
          {this.renderEvidenceContent()}
        </div>
      </div>
    )
  }
}
