import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
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
    if (prevProps.evidence_bundle !== this.props.evidence_bundle) {
      this.filterEvidenceByQuestion();
    }
  }

  filterEvidenceByQuestion = () => {
    const { evidence } = this.props.app;
    const { evidence_bundle } = this.props;
    const allQueries = Object.keys(evidence);
    const questionQueries = Object.keys(evidence_bundle);
    let data = [];

    for (let query of questionQueries) {
      const features = evidence_bundle[query];

      if (allQueries.includes(query)) {
        data = evidence[query].filter(result => {
          return features.includes(result.nlpql_feature);
        });
      }
    }

    this.setState({
      displayEvidence: data
    });
  };

  render() {
    const { displayEvidence } = this.state;

    return (
      <Row>
        {displayEvidence.length > 0 ? (
          displayEvidence.map((evidence, i) => {
            return (
              <Col xs='4' className='mb-2'>
                <Entity key={'evidence' + i} result={evidence} />
              </Col>
            );
          })
        ) : (
          <Col className='align-self-center text-center'>
            <h3>No recommendations.</h3>
          </Col>
        )}
      </Row>
    );
  }
}
