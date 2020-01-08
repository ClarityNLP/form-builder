import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import FormPage from '../containers/form_page_container';
import MyForm from './MyForm';
import { createYupSchema } from "../helpers/yupSchemaCreator";
import * as Yup from "yup";
import { Effect } from 'formik-effect'

// import BasicPage from "./form/basic";
// import LocationPage from "./form/location";
// import SubmitPage from "./form/submit";

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

    console.log("RERENDERING WIZARD V2");

    const renderForm = () => (<MyForm/>);

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
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}
            render={renderForm}
          />
        )}
      </div>
    );
  }
}

export default WizardForm;
