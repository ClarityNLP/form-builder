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
    const { form } = this.props.app;
    const { selectedGroup, selectedQuestion, displayQuestions } = this.state;

    return (
      <Row className='no-gutters'>
        <Col xs='2' className='p-0'>
          <SideBar
            groups={form.groups}
            selectedGroup={selectedGroup}
            handleGroupChange={this.handleGroupChange}
          />
        </Col>
        <Col>
          <Row className='main-container no-gutters'>
            <Col xs='8'>
              <Questions
                questions={displayQuestions}
                group={selectedGroup}
                selectedQuestion={
                  selectedQuestion ? selectedQuestion : form.questions[0]
                }
                handleQuestionChange={this.handleQuestionChange}
              />
            </Col>
            <Col>
              <Evidence
                selectedQuestion={
                  selectedQuestion ? selectedQuestion : form.questions[0]
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
