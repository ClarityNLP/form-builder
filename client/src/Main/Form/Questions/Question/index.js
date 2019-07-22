import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';
import Select from 'react-select';

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      value: null
    };
  }

  componentWillMount() {
    this.updateInputType();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question !== this.props.question) {
      this.updateInputType();
    }
  }

  updateInputType = () => {
    const { question } = this.props;
    const { question_type, answers } = question;
    let tmpInput = null;
    let options = answers.map(ans => {
      return {
        value: ans.value,
        label: ans.text
      };
    });

    switch (question_type) {
      case 'MULTIPLE_CHOICE':
        tmpInput = <Select options={options} isClearable />;
        break;
      case 'DATE':
        tmpInput = <Input type='date' />;
        break;
      case 'TEXT_WITH_MULTIPLE_CHOICE':
        tmpInput = (
          <Row className='no-gutters'>
            <Col>
              <Input type='text' />
            </Col>
            <Col>
              <Select options={options} />
            </Col>
          </Row>
        );
        break;
      case 'TEXT':
        tmpInput = <Input type='text' />;
        break;
      case 'MULTIPLE_SELECT':
        tmpInput = <Select isMulti options={options} />;
        break;
      default:
    }

    this.setState({
      input: <Col xs='8'>{tmpInput}</Col>
    });
  };

  render() {
    const { input } = this.state;
    const { question, handleQuestionChange, active } = this.props;
    const { question_number, question_name } = question;

    return (
      <Row
        onClick={() => {
          handleQuestionChange(question);
        }}
        className={active ? 'question active p-5' : 'question p-5'}
      >
        <Col xs='12'>
          <h5>
            <span>{question_number}.</span> {question_name}
          </h5>
        </Col>
        {input}
      </Row>
    );
  }
}
