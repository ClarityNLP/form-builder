import React, { Component } from "react";
import { Form } from "formik";
import { Switch, Route, Redirect } from "react-router-dom";
import FormPage from '../containers/form_page_container';

class MyForm extends Component {
  componentWillReceiveProps(nextProps) {
  //  // whenever data arrives...
  //  // if (this.props.streamingData !== nextProps.streamingData) {
  //
     console.log('THIS S DATA: ',this.props);
     console.log('NEXT S DATA: ',nextProps);
  //   // decide how to update Formik on your own
  //   // const nextValues = figureOutWhatValuesToKeep(
  //   //   this.props.values,
  //   //   this.props.touched,
  //   //   nextProps.streamingData
  //   // )
  //   //  const nextErrors = figureOutWhatErrorsToKeep(
  //   //   this.props.errors,
  //   //   this.props.touched,
  //   //   nextProps.streamingData
  //   // )
  //   // this.props.setValues(nextProps.streamingData);
  //    // this.props.setValues(nextValues)
  //   //  this.props.setErrors(nextErrors)
  //  // }
  }

  // shouldComponentUpdate(nextProps) {
  //   return false;
  // }

  render() {
    // const {
    //   groups,
    //   formSlug
    // } = this.props;

    const groups = ['group1'];
    const formSlug = 'betterStructure';

    console.log("MY FORM RERENDERING: ",this.props);

    return  (
      <Form>
        {/*<Effect onChange={(currentFormikState, nextFormikState) => {
            console.log('currentFormikState: ',currentFormikState);
            console.log('nextFormikState: ',nextFormikState);
             // do whatevs
             // FYI if you alter state it will cause another render
          }}
        />*/}
        <Switch>
          {groups.map((groupSlug, index) => {
            return (
              <Route
                key={index}
                path={`/app/f/${formSlug}/g/${groupSlug}/:q?/:questionSlug?`}
                component={() => <FormPage form={formSlug} group={groupSlug}/>}
              />
            )
          })}
          <Redirect to={`/app/f/${formSlug}/g/${groups[0]}`}/>*/}
        </Switch>
      </Form>
    )
  }
}

export default MyForm;
