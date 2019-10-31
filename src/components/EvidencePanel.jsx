import React, { Component } from 'react';
import Evidence from './Evidence';

export default class EvidencePanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log('evidences: ',this.props.evidences)
    return (
      <div className="evidence-panel">
        {this.props.evidences.map((evidence, index) => {
          if (evidence.result_display) {
            return <Evidence key={index} evidence={evidence} />;
          }
        })}
      </div>
    )
  }
}
