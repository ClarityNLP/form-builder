import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import SideBar from './Sidebar';
import Question from './Question';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGroup: null,
      currentQuestion: 55
    };
  }

  componentDidMount() {
    this.getResults();
  }

  getResults = () => {
    const { patient, form, smart } = this.props.app;
    this.changeGroup();

    if (patient.documents) {
      this.props.getEvidence(patient, smart.server, form);
    }
  };

  changeGroup = () => {
    const { questions } = this.props.app.form;
    const { currentQuestion } = this.state;
    const { group } = questions[currentQuestion];

    this.setState({
      currentGroup: group
    });
  };

  nextQuestion = () => {
    const { questions } = this.props.app.form;
    const { currentQuestion } = this.state;
    const next = currentQuestion + 1;

    if (next > questions.length) return;

    this.setState(
      {
        currentQuestion: next
      },
      this.changeGroup
    );
  };

  prevQuestion = () => {
    const { currentQuestion } = this.state;
    const prev = currentQuestion - 1;

    if (prev < 0) return;

    this.setState(
      {
        currentQuestion: prev
      },
      this.changeGroup
    );
  };

  render() {
    const { form, loading_evidence } = this.props.app;
    const { groups, questions } = form;
    const { currentGroup, currentQuestion } = this.state;

    return (
      <div className='form'>
        <Row className='no-gutters'>
          <Col xs='2'>
            <SideBar
              groups={groups}
              selectedGroup={currentGroup}
              handleGroupChange={this.handleGroupChange}
            />
          </Col>
          <Col className='page-height'>
            <Container>
              <Row>
                <Col xs='12' className='question_container'>
                  <Question
                    question={questions[currentQuestion]}
                    loading={loading_evidence}
                  />
                </Col>
                <Col xs='12' className='navigation_btns pt-4'>
                  <Row className='justify-content-between'>
                    <Col xs='3'>
                      <Button
                        color='secondary'
                        size='lg'
                        block
                        outline
                        onClick={this.prevQuestion}
                      >
                        Back
                      </Button>
                    </Col>
                    <Col xs='3'>
                      <Button
                        color='secondary'
                        size='lg'
                        block
                        outline
                        onClick={this.nextQuestion}
                      >
                        Continue
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
