import React, { Component } from 'react';
import { Field } from "formik";

export default class QuestionContent extends Component {

  constructor(props) {
    super(props);
  }

  renderQuestion = (question) => {
    switch (question.type) {
      case 'RADIO': {
        return (
          <Field name={question.slug}>
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div className="control">
                {question.options.map((option, index) =>
                  <label key={index} className="radio">
                    <input
                      type="radio"
                      checked={option.value === field.value}
                      {...field}
                      value={option.value || ''}
                    />
                    {option.label}
                  </label>
                )}
              </div>
            )}
          </Field>
        )
      }
      case 'TEXT': {
        return (
          <Field
            name={question.slug}
          >
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div className="field">
                <div className="control">
                  <input
                    className={`input ${errors[field.name] && touched[field.name] && 'is-danger'}`}
                    type="text"
                    {...field}
                    value={field.value || ''}
                  />
                  {touched[field.name] &&
                    errors[field.name] && <div className="help is-danger">{errors[field.name]}</div>}
                </div>
              </div>
            )}
          </Field>
        );
      }
      case 'MULTIPLE_CHOICE': {
        return (
          <div className="control">
            {question.answers.map((answer, index) =>
              <label key={index} className="radio">
                <input type="radio" name={`answer-q${question.question_number}-a${index}`}/>
                {answer.text}
              </label>
            )}
          </div>
        );
      }
      // case 'MC': {
      //   return (
      //     <div className="control">
      //       {question.answers.map((answer, index) =>
      //         <label key={index} className="radio">
      //           <input type="radio" name={`answer-q${question.question_number}-a${index}`}/>
      //           {answer.text}
      //         </label>
      //       )}
      //     </div>
      //   );
      // }
      case 'MC': { //TODO is this just radio now?
        return (
          <Field name={question.slug}>
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div className="control">
                {question.options.map((option, index) =>
                  <label key={index} className="radio">
                    <input
                      type="radio"
                      checked={option.value === field.value}
                      {...field}
                      value={option.value || ''}
                    />
                    {option.label}
                  </label>
                )}
              </div>
            )}
          </Field>
        )
      }
      case 'DATE': {
        return (
          <Field
            name={question.slug}
          >
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div className="field">
                <div className="control">
                  <input
                    className={`input ${errors[field.name] && touched[field.name] && 'is-danger'}`}
                    type="text"
                    {...field}
                    value={field.value || ''}
                  />
                  {touched[field.name] &&
                    errors[field.name] && <div className="help is-danger">{errors[field.name]}</div>}
                </div>
              </div>
            )}
          </Field>
        );
      }
      default: {
        return (
          <span>Unknown Question Type: {question.question_type}</span>
        )
      }
    }
  }

  render() {
    const { question } = this.props;

    return (
      <div className="question-content">
        <h1 className="question-name">{question.name}</h1>
        {this.renderQuestion(question)}
      </div>
    )
  }
}
