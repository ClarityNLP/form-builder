import React, { Component } from 'react';

export default class EvidenceModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/*<div className={`evidence-report-modal modal ${this.state.evidenceModalActive ? 'is-active' : ''}`}>
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
      </div>*/}
      </div>
    )
  }
}
