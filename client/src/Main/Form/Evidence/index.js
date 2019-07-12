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
      this.props.evidence !== prevProps.evidence ||
      this.props.index_date !== prevProps.index_date
    ) {
      this.filterEvidenceByQuestion();
    }
  }

  filterEvidence = (evidence, features) => {
    const { start, end } = this.props.index_date;

    return evidence
      .filter(result => {
        return features.includes(result.nlpql_feature);
      })
      .filter(result => {
        const result_date = new Date(result.result_display.date);

        if (!start && !end) return true;
        if (!start && end) return result_date <= end;
        if (!end && start) return result_date >= start;

        return result_date >= start && result_date <= end;
      })
      .sort((a, b) => {
        const dateA = new Date(a.result_display.date);
        const dateB = new Date(b.result_display.date);

        return dateA - dateB;
      });
  };

  filterEvidenceByQuestion = () => {
    const { selectedQuestion, evidence } = this.props;
    const { evidence_bundle } = selectedQuestion;
    const questionQueries = Object.keys(evidence_bundle);
    let data = [];

    for (let query of questionQueries) {
      const features = evidence_bundle[query];

      if (evidence[query]) {
        if (evidence[query] !== 'loading') {
          data = this.filterEvidence(evidence[query], features);
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
