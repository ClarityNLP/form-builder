import React, { Component } from 'react';
import slugify from 'slugify';
import Question from './Question';
import idx from 'idx';

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

    if (expandedEvidence.isLoaded) {
      return `${classes} is-loaded`
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

  focusQuestion = (question_number) => {
    this.setState({
      focusedQuestionNumber: question_number
    });
    this.refs[question_number].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    return this.props.focusQuestion(question_number);
  }

  keyPressed = (event) => {
    if (event.keyCode === 38) { // up arrow
      event.preventDefault();
      const focusedQuestionIndex = this.state.filteredQuestions.findIndex(question => question.question_number === this.state.focusedQuestionNumber);
      if (focusedQuestionIndex > 0) {
        return this.focusQuestion(this.state.filteredQuestions[focusedQuestionIndex - 1].question_number);
      }
    }
    if (event.keyCode === 40) { // down arrow
      event.preventDefault();
      const focusedQuestionIndex = this.state.filteredQuestions.findIndex(question => question.question_number === this.state.focusedQuestionNumber);
      if (focusedQuestionIndex < this.state.filteredQuestions.length - 1) {
        return this.focusQuestion(this.state.filteredQuestions[focusedQuestionIndex + 1].question_number);
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);

    const { formSlug, groupSlug } = this.props;

    if (formSlug) {
      return this.props.getForm(formSlug)
        .then(() => {
          const group = this.props.form.content.groups.find(group => slugify(group) === groupSlug);
          if (!group) {
            return this.props.push(`/app/${formSlug}/${slugify(this.props.form.content.groups[0])}`);
          }
          const filterQuestions = this.filterQuestions(group);
          this.setState({
            group: group,
            filteredQuestions: filterQuestions,
            focusedQuestionNumber: filterQuestions[0].question_number
          });
          this.refs = this.getRefs(filterQuestions);
          return this.props.focusQuestion(filterQuestions[0].question_number)
            .then(() => this.props.getEvidenceByGroup(
              formSlug,
              group,
              this.props.evidenceByGroup[group],
              this.props.evidence,
              this.props.form.content.questions,
              this.props.fhirClient,
              this.props.docRefs
            ))
        })
        .catch(error => {
          //TODO just handle catch in .getForm action and open Catalog via props
        })
    }
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  componentDidUpdate(prevProps) {
    const { formSlug, groupSlug } = this.props;

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
      this.setState({
        group: group,
        filteredQuestions: filterQuestions,
        focusedQuestionNumber: filterQuestions[0].question_number
      });
      this.refs = this.getRefs(filterQuestions);
      return this.props.focusQuestion(filterQuestions[0].question_number)
        .then(() => this.props.closeCatalog())
        .then(() => this.props.getEvidenceByGroup(
          formSlug,
          group,
          this.props.evidenceByGroup[group],
          this.props.evidence,
          this.props.form.content.questions,
          this.props.fhirClient,
          this.props.docRefs
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
            )
          })}
          </React.Fragment>
        )}
      </div>
    )
  }
}
