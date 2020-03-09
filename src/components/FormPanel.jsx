import React, { Component } from 'react';
import slugify from 'slugify';
import Question from './Question';
import idx from 'idx';
import isEqual from 'lodash/isEqual';

export default class FormPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      group: null,
      filteredQuestions: [],
      focusedQuestionNumber: null,
    };

    this.refs = {};
  }

  getQuestionBlockClasses = (question) => {
    let classes = '';

    if (this.state.focusedQuestionNumber == question.question_number) {
      classes = `${classes} is-focus`;
    }

    const oneEvidence = idx(question, _ => _.nlpql_grouping);

    if (!oneEvidence) {
      return classes;
    }

    const expandedEvidence = this.props.evidence[oneEvidence];

    if (!expandedEvidence || expandedEvidence.isLoading) {
      return `${classes} is-loading`;
    }

    if (expandedEvidence.isLoadError) {
      return `${classes} is-error`;
    }

    if (expandedEvidence.isEvidence) {
      return `${classes} is-evidence`
    }

    return classes;
  }

  getRefs = (questions) => {
    return questions.reduce((acc, q) => {
      acc[q.question_number] = React.createRef();
      return acc;
    }, {});
  }

  filterQuestions = (group) => {
    const filteredQuestions = this.props.form.content.questions.filter((question) => {
      return question.group === group;
    });
    return filteredQuestions;
  }

  scrollToQuestion = (question_number, behavior) => {
    this.refs[question_number].current.scrollIntoView({
      behavior: behavior || 'auto',
      block: 'center',
    });
  }

  focusQuestion = (questionNumber) => {
    this.setState({
      focusedQuestionNumber: questionNumber
    });
    return this.props.focusQuestion(questionNumber);
  }

  handleQuestionClick = (questionNumber, behavior) => {
    this.scrollToQuestion(questionNumber, behavior);
    return this.focusQuestion(questionNumber);
  }

  keyPressed = (event) => {
    if (event.keyCode === 38) { // up arrow
      event.preventDefault();
      const focusedQuestionIndex = this.state.filteredQuestions.findIndex(question => question.question_number === this.state.focusedQuestionNumber);
      if (focusedQuestionIndex > 0) { // Go to previous question
        const focusedQuestionNumber = this.state.filteredQuestions[focusedQuestionIndex - 1].question_number;
        this.focusQuestion(focusedQuestionNumber);
        return this.scrollToQuestion(focusedQuestionNumber, 'smooth');
      }
      if (focusedQuestionIndex === 0){ // Go to last question in previous group
        const totalGroups = this.props.form.content.groups.length;
        const currentGroupIndex = this.props.form.content.groups.findIndex(group => group === this.state.group);
        const prevGroup = this.props.form.content.groups[(currentGroupIndex+totalGroups-1)%totalGroups];
        return this.props.push(`/app/${this.props.formSlug}/${slugify(prevGroup)}?pos=end`);
      }
    }
    if (event.keyCode === 40) { // down arrow
      event.preventDefault();
      const focusedQuestionIndex = this.state.filteredQuestions.findIndex(question => question.question_number === this.state.focusedQuestionNumber);
      if (focusedQuestionIndex < this.state.filteredQuestions.length - 1) {
        const focusedQuestionNumber = this.state.filteredQuestions[focusedQuestionIndex + 1].question_number;
        this.focusQuestion(focusedQuestionNumber);
        return this.scrollToQuestion(focusedQuestionNumber, 'smooth');
      }
      if (focusedQuestionIndex === this.state.filteredQuestions.length - 1) {
        const totalGroups = this.props.form.content.groups.length;
        const currentGroupIndex = this.props.form.content.groups.findIndex(group => group === this.state.group);
        const nextGroup = this.props.form.content.groups[(currentGroupIndex+totalGroups+1)%totalGroups];
        return this.props.push(`/app/${this.props.formSlug}/${slugify(nextGroup)}`);
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false); //Need form to exist before keyPressed can be called.

    const { formSlug, groupSlug, pos } = this.props;

    if (formSlug) {
      return this.props.getForm(formSlug)
        .then(() => {
          const group = this.props.form.content.groups.find(group => slugify(group) === groupSlug);
          if (!group) {
            return this.props.push(`/app/${formSlug}/${slugify(this.props.form.content.groups[0])}`);
          }
          const filterQuestions = this.filterQuestions(group);

          this.refs = this.getRefs(filterQuestions);

          return this.setState({
            group: group,
            filteredQuestions: filterQuestions,
            focusedQuestionNumber: pos === 'end' ? filterQuestions[filterQuestions.length - 1].question_number : filterQuestions[0].question_number
          });
        })
        .catch(error => {
          //TODO just handle catch in .getForm action and open Catalog via props
        })
    }
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  componentDidUpdate(prevProps, prevState) {
    const { formSlug, groupSlug, pos } = this.props;
    const { filteredQuestions, group } = this.state;

    if (formSlug !== prevProps.formSlug) {
      return this.props.resetForm()
        .then(() => this.props.getForm(formSlug))
        .then((form) => {
          const group = this.props.form.content.groups.find(group => slugify(group) === groupSlug);
          return !group ? (
            this.props.push(`/app/${formSlug}/${slugify(this.props.form.content.groups[0])}`)
          ) : (
            this.props.push(`/app/${formSlug}/${groupSlug}`)
          )
        })
    }

    if (groupSlug !== prevProps.groupSlug) {
      const group = this.props.form.content.groups.find(group => slugify(group) === groupSlug) //|| this.props.form.content.groups[0];
      if (!group) {
        return this.props.push(`/app/${formSlug}/${slugify(this.props.form.content.groups[0])}`);
      }
      const filterQuestions = this.filterQuestions(group);

      this.refs = this.getRefs(filterQuestions);

      return this.setState({
        group: group,
        filteredQuestions: filterQuestions,
        focusedQuestionNumber: pos === 'end' ? filterQuestions[filterQuestions.length - 1].question_number : filterQuestions[0].question_number
      });
    }

    if (!isEqual(filteredQuestions, prevState.filteredQuestions)) {
      this.scrollToQuestion(pos === 'end' ? filteredQuestions[filteredQuestions.length - 1].question_number : filteredQuestions[0].question_number, 'auto');
      return this.props.focusQuestion(pos === 'end' ? filteredQuestions[filteredQuestions.length - 1].question_number : filteredQuestions[0].question_number)
        .then(() => this.props.closeCatalog())
        .then(() => this.props.getEvidenceByGroup(
          formSlug,
          group,
          this.props.evidenceByGroup[group],
          this.props.evidence,
          this.props.form.content.questions,
          this.props.fhirClient,
          this.props.sourceId
        ))
    }

  }

  render() {
    return (
      <div className="form-panel">
        { !this.props.form.content ? (
          <React.Fragment>
          <li className="question-block is-skeleton">
            <div className="question-number">
              <div className="question-number-bubble">
                <div className="question-number-bubble-border"></div>
                <div className="question-number-bubble-content"></div>
              </div>
            </div>
          </li>
          <li className="question-block is-skeleton">
            <div className="question-number">
              <div className="question-number-bubble">
                <div className="question-number-bubble-border"></div>
                <div className="question-number-bubble-content"></div>
              </div>
            </div>
          </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
          {this.state.filteredQuestions.map((question) => {
            return (
              <li
                key={question.question_number}
                ref={this.refs[question.question_number]}
                className={`question-block ${this.getQuestionBlockClasses(question)}`}
                onClick={ () => this.handleQuestionClick(question.question_number, 'smooth') }
              >
                <div className="question-number">
                  <div className="question-number-bubble">
                    <div className="question-number-bubble-border"></div>
                    <div className="question-number-bubble-content">{question.question_number}</div>
                  </div>
                </div>
                <Question question={question}/>
              </li>
            )
          })}
          </React.Fragment>
        )}
      </div>
    )
  }
}
