import React, { Component } from 'react';
import slugify from 'slugify';
import Question from './Question';

export default class FormPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      group: null,
      filteredQuestions: [],
      focusedQuestionNumber: null
    }
  }

  filterQuestions = (group) => {
    const filteredQuestions = this.props.form.questions.filter((question) => {
      return question.group === group;
    });
    return filteredQuestions;
  }

  focusQuestion = (question_number) => {
    this.setState({
      focusedQuestionNumber: question_number
    });
  }

  keyPressed = (event) => {
    if (event.keyCode === 38) { // up arrow
      const focusedQuestionIndex = this.state.filteredQuestions.findIndex(question => question.question_number === this.state.focusedQuestionNumber);
      if (focusedQuestionIndex > 0) {
        this.setState({
          focusedQuestionNumber: this.state.filteredQuestions[focusedQuestionIndex - 1].question_number
        });
      }
    }
    if (event.keyCode === 40) { // down arrow
      const focusedQuestionIndex = this.state.filteredQuestions.findIndex(question => question.question_number === this.state.focusedQuestionNumber);
      if (focusedQuestionIndex < this.state.filteredQuestions.length - 1) {
        this.setState({
          focusedQuestionNumber: this.state.filteredQuestions[focusedQuestionIndex + 1].question_number
        });
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  componentDidUpdate(prevProps) {
  const __this = this;
  const { pathname } = this.props;

  if (pathname !== prevProps.pathname) {
    const slug = pathname.substr(pathname.lastIndexOf('/') + 1);
    const group = this.props.form.groups.find(group => slugify(group) === slug);
    const filterQuestions = __this.filterQuestions(group);
    this.setState({
      group: group,
      filteredQuestions: filterQuestions,
      focusedQuestionNumber: filterQuestions[0].question_number
    });
    return this.props.getEvidenceByGroup(group, this.props.evidenceByGroup[group], this.props.form.questions)
    // .then(() => {
    //   console.log('Done getting evidence by group.');
    // })
    // .catch(() => {
    //   console.log('Problem getting evidence by group.');
    // })
  }

}

  render() {
    return (
      <div className="form-panel">
        {this.state.filteredQuestions.map((question, index) => {
          return <li
                    key={index}
                    className={`question-block ${this.state.focusedQuestionNumber == question.question_number ? 'is-focus' : ''}`}
                    onClick={ () => this.focusQuestion(question.question_number) }
                  >
                    <div className="question-number">
                      <div className="question-number-bubble">
                        <div className="question-number-bubble-border"></div>
                        <div className="question-number-bubble-content">{question.question_number}</div>
                      </div>
                    </div>
                    <Question question={question}/>
                  </li>
        })}
      </div>
    )
  }
}
