import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Questions from './Questions';
import Evidence from './Evidence';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGroup: null,
      selectedQuestion: null
    };
  }

  componentDidMount() {
    this.getResults();
  }

  getResults = () => {
    const { patient, form, smart } = this.props.app;

    if (patient.documents) {
      this.props.getEvidence(patient, smart.server, form);
    }
  };

  handleQuestionChange = question => {
    this.setState({
      selectedQuestion: question
    });
  };

  render() {
    const { form, evidence, loading_evidence, index_date } = this.props.app;
    const { selectedQuestion } = this.state;
    const { groups, questions } = form;

    return (
      <Row className='main-contaier no-gutters'>
        <Col xs='8'>
          <Questions
            groups={groups}
            questions={questions}
            selectedQuestion={selectedQuestion}
            handleQuestionChange={this.handleQuestionChange}
          />
        </Col>
        <Col xs='4'>
          <Evidence
            selectedQuestion={
              selectedQuestion ? selectedQuestion : form.questions[0]
            }
            evidence={evidence}
            loading={loading_evidence}
            index_date={index_date}
          />
        </Col>
      </Row>
    );
  }
}
