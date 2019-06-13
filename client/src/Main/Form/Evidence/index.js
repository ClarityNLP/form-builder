import React, { Component } from 'react';
import Loader from '../../../Loader';
import Entity from './Entity';

export default class Evidence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayEvidence: []
    };
  }

  componentDidMount() {
    this.filterEvidenceByQuestion();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedQuestion !== this.props.selectedQuestion ||
      this.props.evidence !== prevProps.evidence
    ) {
      this.filterEvidenceByQuestion();
    }
  }

  filterEvidenceByQuestion = () => {
    const { selectedQuestion, evidence } = this.props;
    const { evidence_bundle } = selectedQuestion;
    const questionQueries = Object.keys(evidence_bundle);
    let data = [];

    for (let query of questionQueries) {
      const features = evidence_bundle[query];

      if (evidence[query]) {
        if (evidence[query] !== 'loading') {
          data = evidence[query]
            .filter(result => {
              return features.includes(result.nlpql_feature);
            })
            .sort((a, b) => {
              const dateA = new Date(a.report_date);
              const dateB = new Date(b.report_date);

              return dateA - dateB;
            });
        } else {
          data = 'loading';
        }
      }
    }

    this.setState({
      displayEvidence: data
    });
  };

  render() {
    const { displayEvidence } = this.state;

    return (
      <div className='evidence'>
        {displayEvidence === 'loading' ? (
          <Loader />
        ) : (
          <div>
            <div className='text-center mb-2'>
              <h3>{displayEvidence.length} results found</h3>
            </div>
            {displayEvidence.map((e, i) => {
              return <Entity key={'evidence' + i} result={e} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
