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
    if (prevProps.selectedQuestion !== this.props.selectedQuestion) {
      this.filterEvidenceByQuestion();
    }
  }

  filterEvidenceByQuestion = () => {
    const { selectedQuestion, evidence } = this.props;
    const { evidence_bundle } = selectedQuestion;
    const allQueries = Object.keys(evidence);
    const questionQueries = Object.keys(evidence_bundle);
    let data = [];

    for (let query of questionQueries) {
      const features = evidence_bundle[query];

      if (allQueries.includes(query)) {
        data = evidence[query]
          .filter(result => {
            return features.includes(result.nlpql_feature);
          })
          .sort((a, b) => {
            const dateA = new Date(a.report_date);
            const dateB = new Date(b.report_date);

            return dateA - dateB;
          });
      }
    }

    this.setState({
      displayEvidence: data
    });
  };

  render() {
    const { loading, evidence } = this.props;
    // const { displayEvidence } = this.state;

    const displayEvidence = evidence
      .filter(e => {
        return e.nlpql_feature !== 'null';
      })
      .sort((a, b) => {
        const dateA = new Date(a.report_date);
        const dateB = new Date(b.report_date);

        return dateA - dateB;
      });

    return (
      <div className='evidence'>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className='text-center mb-5'>
              <h3 className='mb-3'>{displayEvidence.length} Results Found</h3>
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
