import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import FormPage from '../containers/form_page_container';
import { createYupSchema } from "../helpers/yupSchemaCreator";
import * as Yup from "yup";
import { Effect } from 'formik-effect'
import isEqual from 'lodash/isEqual';

class RealTimeFormik extends Component {
  render() {
    if (!this.props.initialValues) {
      return null
    }

    return (
      <FormikWithStickyValues
        {...this.props}
        render={props =>
          <KeepDirty streamingData={this.props.initialValues} {...props}>
            {this.props.render(props)}
          </KeepDirty>
        }
      />
    )
  }
}

class FormikWithStickyValues extends Component {
  constructor(props) {
    super(props)
    // stamp data on mount
    this.initialValues = Object.assign({}, props.initialValues)
  }

 render() {
   // exclude initialValues from pass thru
  const { initialValues, ...props} = this.props

  return  (
    <Formik
       initialValues={this.initialValues}
       {...props}
    />
   )
 }
}

class KeepDirty extends Component {
  componentWillReceiveProps(nextProps) {
    // whenever data arrives...
    if (this.props.streamingData !== nextProps.streamingData) {
      const nextValues = Object.keys(nextProps.streamingData).reduce((values, questionSlug) => {
        values[questionSlug] = (
          !this.props.values[questionSlug] &&
          !this.props.touched[questionSlug] &&
          !isEqual(this.props.values[questionSlug], nextProps.streamingData[questionSlug])
        ) ? (
          nextProps.streamingData[questionSlug]
        ) : (
          this.props.values[questionSlug]
        )
        return values;
      }, {});
     // decide how to update Formik on your own
     //  const nextErrors = figureOutWhatErrorsToKeep(
     //   this.props.errors,
     //   this.props.touched,
     //   nextProps.streamingData
     // )
      this.props.setValues(nextValues)
      // this.props.setErrors(nextErrors)
    }
  }

  render() {
   return this.props.children
  }
 }

class WizardForm extends Component {
  // state = {
  //   submitted: false,
  // };
  handleSubmit = () => {

    console.log('handle on submit...');
    // this.setState(
    //   {
    //     submitted: true,
    //   },
    //   () => this.props.history.push("/"),
    // );
  };

  transformGroupsToValues = (groups) => {
    const values = groups.allIds.reduce((values, groupSlug) => {
      const groupValues = groups.byId[groupSlug].questions.allIds.reduce((values, questionSlug) => {
        values[questionSlug] = groups.byId[groupSlug].questions.byId[questionSlug].value;
        return values;
      }, {});

      values = {
        ...values,
        ...groupValues
      };

      return values;
    }, {});
    return values;
  }

  transformGroupsToQuestions = (groups) => {
    const questions = groups.allIds.reduce((questions, groupSlug) => {
      const groupQuestions = groups.byId[groupSlug].questions.allIds.map((questionSlug) => {
        return {
          ...groups.byId[groupSlug].questions.byId[questionSlug],
          slug: questionSlug
        }
      })

      questions = [
        ...questions,
        ...groupQuestions
      ];

      return questions;
    }, []);

    return questions;
  }

  componentDidMount() {
    console.log('WIZ comp mounted...');
  }

  render() {
    const {
      groups,
      formIsLoaded,
      formSlug
    } = this.props;

    let formData;
    let validationSchema;

    if (formIsLoaded) {
      formData = this.transformGroupsToValues(this.props.groups);
      const yupSchema = this.transformGroupsToQuestions(this.props.groups).reduce(createYupSchema, {});
      validationSchema = Yup.object().shape(yupSchema);
    }

    return (
      <div className="form-panel">
        {/*<Prompt
          when={!this.state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/form" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        />*/}
          { !formIsLoaded ? (
          <React.Fragment>
          <li className="question-block is-skeleton">
            <div className="question-indicator">
              <div className="question-indicator-bubble">
                <div className="question-indicator-bubble-border"></div>
                <div className="question-indicator-bubble-content"></div>
              </div>
            </div>
          </li>
          <li className="question-block is-skeleton">
            <div className="question-indicator">
              <div className="question-indicator-bubble">
                <div className="question-indicator-bubble-border"></div>
                <div className="question-indicator-bubble-content"></div>
              </div>
            </div>
          </li>
          </React.Fragment>
        ) : (
          <RealTimeFormik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}
            render={props =>
              <Form>
                {/*<Effect onChange={(currentFormikState, nextFormikState) => {
                    console.log('currentFormikState: ',currentFormikState);
                    console.log('nextFormikState: ',nextFormikState);
                     // do whatevs
                     // FYI if you alter state it will cause another render
                  }}
                />*/}
                <Switch>
                  {groups.allIds.map((groupSlug, index) => {
                    return (
                      <Route
                        key={index}
                        path={`/app/f/${formSlug}/g/${groupSlug}/:q?/:questionSlug?`}
                        render={() => <FormPage form={formSlug} group={groupSlug}/>}
                      />
                    )
                  })}
                  <Redirect to={`/app/f/${formSlug}/g/${groups.allIds[0]}`}/>
                </Switch>
              </Form>
            }
          />
        )}
      </div>
    );
  }
}

export default WizardForm;
