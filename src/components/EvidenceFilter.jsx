import React, { Component } from 'react';

export default class EvidenceFilter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    )
  }
}
