import React from 'react';
import { withFormik } from "formik";
import * as Yup from "yup";
import debounce from 'lodash/debounce';
import TestComponent from './TestComponent';
import { Route, Switch, Redirect } from 'react-router-dom';

const formikEnhancer = withFormik({
  // validationSchema: Yup.object().shape({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required!")
  // }),
  enableReinitialize: true,
  mapPropsToValues: props => (
    props.questions.allIds.reduce((acc, questionSlug) => {
      acc[questionSlug] = props.questions.byId[questionSlug].value
      return acc;
    }, {})
  ),

  // handleSubmit: (values, { setSubmitting }) => {
  //   const payload = {
  //     ...values
  //   };
  //
  //   setTimeout(() => {
  //     alert(JSON.stringify(payload, null, 2));
  //     setSubmitting(false);
  //   }, 1000);
  // },
  // displayName: "MyForm"
});

const handleFormReset = handleReset => {
  // store.dispatch(resetMessage()); //call dispatch action from ... future container component ...
  handleReset();
};

// const validateField = debounce(
//   ({ errors, value }) =>
//     !errors && value
//       ? store.dispatch(setMessage())
//       : store.dispatch(resetMessage()),
//   500
// );

const MyForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    status,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isSubmitting,
    questions
  } = props;

  return (
    <form>
      <Switch>
        <Redirect from="/app/betterStructure" exact to="/app/betterStructure/basic" />
        <Route path="/app/betterStructure/basic" component={TestComponent} />
        <Route path="/app/betterStructure/location" component={TestComponent} />
        <Route path="/app/betterStructure/submit" component={TestComponent} />
      </Switch>
      {/*{questions.allIds.map((questionSlug, index) => {
        return (
          <li
            key={index}
            className={`question-block`}
          >*/}
            {/*ref={this.refs[questionSlug]}*/}
            {/*${this.getQuestionBlockClasses(questionSlug, questions.byId[questionSlug])}*/}
            {/*onClick={ () => this.handleQuestionClick(questionSlug, 'smooth') }*/}
            {/*<div className="question-indicator">
              <div className="question-indicator-bubble">
                <div className="question-indicator-bubble-border"></div>
                <div className="question-indicator-bubble-content">{questions.byId[questionSlug].number}</div>
              </div>
            </div>*/}
            {/*<Question question={questions.byId[questionSlug]}/>*/}
            {/* TEMPORARY QUESTION until we componentize... */}
            {/*<div className="question-content">
              <h1 className="question-name">{questions.byId[questionSlug].name}</h1>
              <div className="control">
                {questions.byId[questionSlug].options.map((option, index) =>
                  <label key={index} className="radio">
                    <input
                      type="radio"
                      name={questionSlug}
                      value={option.value}
                      checked={values[questionSlug] === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {option.label}
                  </label>
                )}
              </div>
            </div>
          </li>
        )
      })}*/}
    </form>
  );
};

export default formikEnhancer(MyForm);



// <Formik
//   enableReinitialize
//   initialValues={this.getInitialValues(questions)}
//   render={({
//     values,
//     touched,
//     dirty,
//     errors,
//     status,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     handleReset,
//     setFieldValue,
//     setFieldTouched,
//     isSubmitting
//   }) => (
//     <form>
//       {questions.allIds.map((questionSlug, index) => {
//         return (
//           <li
//             key={index}
//             ref={this.refs[questionSlug]}
//             className={`question-block ${this.getQuestionBlockClasses(questionSlug, questions.byId[questionSlug])}`}
//             onClick={ () => this.handleQuestionClick(questionSlug, 'smooth') }
//           >
//             <div className="question-indicator">
//               <div className="question-indicator-bubble">
//                 <div className="question-indicator-bubble-border"></div>
//                 <div className="question-indicator-bubble-content">{questions.byId[questionSlug].number}</div>
//               </div>
//             </div>
//             {/*<Question question={questions.byId[questionSlug]}/>*/}
//             {/* TEMPORARY QUESTION until we componentize... */}
//             <div className="question-content">
//               <h1 className="question-name">{questions.byId[questionSlug].name}</h1>
//               <div className="control">
//                 {questions.byId[questionSlug].options.map((option, index) =>
//                   <label key={index} className="radio">
//                     <input
//                       type="radio"
//                       name={questionSlug}
//                       value={option.value}
//                       checked={values[questionSlug] === option.value}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {option.label}
//                   </label>
//                 )}
//               </div>
//             </div>
//           </li>
//         )
//       })}
//     </form>
//   )}
// />
