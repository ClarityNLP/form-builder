import React, { Component } from 'react';
import Evidence from './Evidence';
import idx from 'idx';
import BouncingBalls from './BouncingBalls';
import groupBy from 'lodash/groupBy';
import Moment from 'react-moment';

export default class EvidencePanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      evidenceModalActive: false,
      evidenceModalHeader: null,
      reportText: null,
      highlights: null
    };
  }

  replacer = index => {
    return index + ':REPLACETEXT';
  };

  getHighlightedText(text, highlights) {
    if (!highlights) return text;

    if (!text) return '';

    if (text === '' || highlights.length <= 0) return text;

    let s = text;
    let foundText = /[0-9]:REPLACETEXT/g;

    for (let h in highlights) {
      let highlight = highlights[h].toString();
      if (highlight.trim() === '') break;

      highlight = new RegExp(highlight, 'g');

      s = s.replace(highlight, this.replacer(h));
    }

    const splitText = s.split(foundText);
    const matches = s.match(foundText);

    if (!matches) return text;

    const highlightedText = splitText.reduce(
      (arr, element, index) =>
        matches[index]
          ? [
              ...arr,
              element,
              <span key={'highlight' + index} className='highlight'>
                {highlights[parseInt(matches[index], 10)]}
              </span>
            ]
          : [...arr, element],
      []
    );

    return highlightedText;
  }

  toggleEvidenceModalActive = (evidence) => {
    if (!evidence) {
      return this.setState({
        evidenceModalActive: false,
        evidenceModalHeader: null,
        reportText: null,
        highlights: null
      });
    }
    return this.setState({
      evidenceModalActive: true,
      evidenceModalHeader: evidence.code_coding_0_display ? this.titleize(evidence.code_coding_0_display) : null,
      reportText: evidence.result_display ? evidence.result_display.result_content : null,
      highlights: evidence.result_display ? evidence.result_display.highlights : null,
    })
  }

  titleize = (slug) => {
    var words = slug.split('_');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
  }

  groupEvidence = (results) => {
    const groups = groupBy(results, 'report_type');
    return (
      <React.Fragment>
        {Object.keys(groups).map((groupName, index) => {
          return <React.Fragment key={index}>
            {groupName === 'Condition' &&
              <React.Fragment>
                {/*{groups[groupName].length === 0 ? (
                  <div>single</div>
                ) : (*/}
                  <React.Fragment>
                    <div className="evidence">
                      <h6 className="evidence-report-type">Conditions</h6>
                      <table className="table is-narrow is-striped is-hoverable">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          {groups[groupName].map((result, index) => {
                            return (
                              <tr key={index} onClick={ () => this.toggleEvidenceModalActive(result) }>
                                <td>{result.code_coding_0_display ? this.titleize(result.code_coding_0_display) : 'No nlpql feature'}</td>
                                <td>{ result.result_display ? <Moment format='MM.DD.YY'>{result.result_display.date}</Moment> : 'No date'}</td>
                                <td>{result.code_coding_0_code}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </React.Fragment>
                {/*)}*/}
              </React.Fragment>
            }
            {groupName === 'Observation' &&
              <React.Fragment>
                {/*{groups[groupName].length === 0 ? (
                  <div>single</div>
                ) : (*/}
                  <React.Fragment>
                    <div className="evidence">
                      <h6 className="evidence-report-type">Observations</h6>
                      <table className="table is-narrow is-striped is-hoverable">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Val/Unit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {groups[groupName].map((result, index) => {
                            return (
                              <tr key={index} onClick={ () => this.toggleEvidenceModalActive(result) }>
                                <td>{result.code_coding_0_display ? this.titleize(result.code_coding_0_display) : 'No nlpql feature'}</td>
                                <td>{ result.result_display ? <Moment format='MM.DD.YY'>{result.result_display.date}</Moment> : 'No date'}</td>
                                <td>{result.code_coding_0_code}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </React.Fragment>
                {/*)}*/}
              </React.Fragment>
            }
            {((groupName !== 'Condition') && (groupName !== 'Observation')) &&
              <React.Fragment>
              {groups[groupName].map((result, index) => {
                if (result.result_display) {
                  return <Evidence key={index} evidence={result} />;
                }
              })}
              </React.Fragment>
            }
          </React.Fragment>
        })}
      </React.Fragment>
    )
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
              {this.groupEvidence(expandedEvidence.results)}
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
        <div className={`evidence-report-modal modal ${this.state.evidenceModalActive ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{this.state.evidenceModalHeader ? this.state.evidenceModalHeader : '<NO-REPORT-TYPE>'}</p>
              <button
                className="delete"
                aria-label="close"
                onClick={ () => this.toggleEvidenceModalActive() }
              ></button>
            </header>
            <section className="modal-card-body">
              {this.state.reportText ? (
                <pre className='report_text'>
                {this.getHighlightedText(this.state.reportText, this.state.highlights)}
                </pre>
              ) : (
                "<NO-RESULT-TEXT>"
              )}
            </section>
            <footer className="modal-card-foot">
              <button className="button is-primary">Valid</button>
              <button className="button is-primary is-outlined">Not valid</button>
              <button
                className="button"
                onClick={ () => this.toggleEvidenceModalActive() }
              >Cancel</button>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
