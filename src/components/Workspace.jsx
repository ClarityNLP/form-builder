import React, { Component } from 'react';
import Catalog from '../containers/catalog_container';
import NavbarLeft from '../containers/navbar_left_container';
import NavbarTop from '../containers/navbar_top_container';
import HotKeys from '../containers/hot_keys_container';
import EvidenceSidebar from '../containers/evidence_sidebar_container';
import FetchGroupEvidenceAndAutofill from '../containers/fetch_group_evidence_and_autofill_container';
import StartActivity from '../containers/start_activity_container';
import AutofillModal from '../containers/autofill_modal_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import { Formik, Form } from "formik";
import { createYupSchema } from "../helpers/yupSchemaCreator";
import * as Yup from "yup";
import FormPage from '../containers/form_page_container';

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
          // !this.props.touched[questionSlug] && Don't really want this since onSubmit sets touched=true
          // on all fields, making future autofill responses not update the ui even though the user
          // didn't physically touch those unvisted questions
          // !this.props.dirty[questionSlug] &&
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

class Workspace extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { activityId } = this.props;

    if (activityId) {
      return this.props.getActivity(activityId)
        .then(() => {
        })
        .catch(error => {
          //TODO just handle catch in .getForm action and open Catalog via props
        })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { activityId } = this.props
    const { activityId : prevActivityId } = prevProps;

    if (activityId !== prevActivityId) {
      if (activityId) {
        return this.props.getActivity(activityId);
      }
    }
  }

  handleSubmit = (values, { setSubmitting, setStatus }) => {
    const {
      activityId,
      groups
    } = this.props;

    return this.props.saveActivityValues(activityId, values)
      .then(() => this.props.saveActivityGroupLoadingState(activityId, groups))
      .then((res) => {
        //TODO do something after saving?
      })
      .catch((err) => {
        //TODO do something if something went wrong saving?
      });
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

  render() {
    const { activityId, activityIsLoaded, groups } = this.props;

    let formData;
    let validationSchema;

    if (activityIsLoaded) {
      formData = this.transformGroupsToValues(groups);
      const yupSchema = this.transformGroupsToQuestions(groups).reduce(createYupSchema, {});
      validationSchema = Yup.object().shape(yupSchema);
    }

    return (
      <div className="form-builder">
        {/* TODO: do we need "formData || {}" */}
        <RealTimeFormik
          initialValues={formData || {}}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
          render={props =>
            <Form>
              <NavbarTop/>
              <div className="workspace">
                <Route path={`/app/:a?/:activityId?/:g?/:groupSlug?`} component={NavbarLeft}/>
                <div className="form-panel">
                  { !activityIsLoaded ? (
                    <>
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
                    </>
                  ) : (
                    <Switch>
                      {groups.allIds.map((groupSlug, index) => {
                        return (
                          <Route
                            key={index}
                            path={`/app/a/${activityId}/g/${groupSlug}`}
                            render={({match, location, history}) =>
                              <FormPage
                                activity={activityId}
                                group={groupSlug}
                                location={location}
                                history={history}
                                match={match}
                              />
                            }
                          />
                        )
                      })}
                      <Redirect to={`/app/a/${activityId}/g/${groups.allIds[0]}`}/>
                    </Switch>
                  )}
                </div>
                <EvidenceSidebar/>
                <Route
                  exact
                  path={[
                    "/app/catalog",
                    "/app/a/:activityId/g/:groupSlug/q/:questionSlug"
                  ]}
                  children={(props) => <Catalog {...props}/>}
                />
                <Route path={`/app/f/:formSlug`} component={StartActivity}/>
                { activityIsLoaded &&
                  <>
                    <Route
                      exact
                      path="/app/a/:activityId/g/:groupSlug/q/:questionSlug/autofill"
                      render={({match}) => <AutofillModal {...match}/>}
                    />
                    <Route exact path={`/app/a/:activityId/g/:groupSlug/q/:questionSlug`}>
                      <HotKeys/>
                    </Route>
                    <Route path={`/app/a/:activityId/g/:groupSlug`} component={FetchGroupEvidenceAndAutofill}/>
                  </>
                }
              </div>
            </Form>
          }
        />
      </div>
    )
  }
}

export default Workspace
