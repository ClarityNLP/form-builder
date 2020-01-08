import React, { Component } from 'react';

export default class EvidenceList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { evidence } = this.props;

    return (
      <div className="evidence-list">
        { evidence ? (
          <React.Fragment>
          {evidence.allIds.map((feature, index) => {
            return (
              <div key={index}>FEATURE: {feature}</div>
            )
          })}
          </React.Fragment>
        ): (
          <div>no evidence...</div>
        )}
      </div>
    )
  }
}
