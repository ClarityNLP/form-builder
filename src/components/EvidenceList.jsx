import React, { Component } from 'react';
import Feature from './Feature';
import BouncingBalls from './BouncingBalls';

export default class EvidenceList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showEvidenceModal: false
    }
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

  onEvidenceClick({result_display, report_text, report_type, nlpql_feature}) {
    if (result_display && report_text) {
      const { result_content, sentence, highlights } = result_display;
      this.setState({
        showEvidenceModal: true,
        highlightedText: this.getHighlightedText(report_text, highlights)
      });
    }
  }

  toggleEvidenceModal = e => {
    this.setState(prevState => ({
      showEvidenceModal: !prevState.showEvidenceModal
    }));
  };

  render() {
    const {
      evidence,
      groupIsLoaded,
      isAutofillLoadError,
      autofillLoadError
    } = this.props;

    return (
      <>
        <div className="evidence-list">
          <>
          { evidence &&
            <>
            {evidence.isLoading &&
              <div className="is-loading">
                <BouncingBalls/>
              </div>
            }
            {evidence.isLoadError &&
              <div className="message is-danger">
                <div className="message-body">
                  Problem loading evidence bundle: {evidence.errorMessage}
                </div>
              </div>
            }
            {isAutofillLoadError && !evidence.isLoading &&
              <div className="message is-warning">
                <div className="message-body">
                  {`Issue autofilling question: ${autofillLoadError}`}
                </div>
              </div>
            }
            {(evidence.isLoaded || groupIsLoaded) &&
              <>
              {evidence.allIds.map((feature, index) => {
                if (evidence.byId[feature].items) {
                  return (
                    <Feature
                      key={index}
                      onEvidenceClick={(params) => this.onEvidenceClick(params)}
                      {...evidence.byId[feature]}/>
                  )
                }
              })}
              </>
            }
            </>
          }
          </>
        </div>
        <div className={`evidence-report-modal modal ${this.state.showEvidenceModal ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Report text</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleEvidenceModal}
                type="button"
              ></button>
            </header>
            <section className="modal-card-body">
              {this.state.highlightedText}
            </section>
            <footer className="modal-card-foot">
              <button type="button" className="button is-primary">Valid</button>
              <button type="button" className="button is-primary is-outlined">Not valid</button>
              <button
                type="button"
                className="button"
                onClick={this.toggleEvidenceModal}
              >Cancel</button>
            </footer>
          </div>
        </div>
      </>
    )
  }
}
