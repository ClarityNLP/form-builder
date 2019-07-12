import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SideBar from './Sidebar';
import Questions from './Questions';
import Evidence from './Evidence';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGroup: null,
      selectedQuestion: null,
      displayQuestions: props.app.form.questions
    };
  }

  componentDidMount() {
    // this.getResults();
  }

  getResults = () => {
    const { patient, form, smart } = this.props.app;

    if (patient.documents) {
      this.props.getEvidence(patient, smart.server, form);
    }
  };

  handleGroupChange = group => {
    const { form } = this.props.app;
    let tmpQuestions = [];

    if (group) {
      tmpQuestions = form.questions.filter(
        question => group === question.group
      );
    } else {
      tmpQuestions = form.questions;
    }

    this.setState({
      selectedGroup: group,
      displayQuestions: tmpQuestions,
      selectedQuestion: tmpQuestions[0]
    });
  };

  handleQuestionChange = question => {
    this.setState({
      selectedQuestion: question
    });
  };

  render() {
    const { form, evidence, loading_evidence, index_date } = this.props.app;
    const { selectedGroup, selectedQuestion, displayQuestions } = this.state;

    return (
      <Row className='no-gutters form'>
        <Col xs='8' className='p-0'>
          <iframe src='https://cibmtr.org' />
          {/* <SideBar
            groups={form.groups}
            selectedGroup={selectedGroup}
            handleGroupChange={this.handleGroupChange}
          />
        </Col>
        <Col>
          <Row className='main-container no-gutters'>
            <Col xs='6'>
              <Questions
                questions={displayQuestions}
                group={selectedGroup}
                selectedQuestion={
                  selectedQuestion ? selectedQuestion : form.questions[0]
                }
                handleQuestionChange={this.handleQuestionChange}
              /> */}
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
      //   </Col>
      // </Row>
    );
  }
}
