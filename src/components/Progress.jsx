import React, { useState, useCallback } from 'react';
import { useFormikContext } from 'formik';

const Progress = React.memo(function Progress(props) {
  // Grab values and submitForm from context
  const { values, errors, touched, submitForm } = useFormikContext();
  const [numAnsQues, setNumAnsQues] = useState(0);
  const [numQues, setNumQues] = useState(0);
  const [numErrors, setNumErrors] = useState(0);
  const [errorAndTouchedArr, setErrorAndTouchedArr] = useState(0);
  const [nextInvalidQuestion, setNextInvalidQuestion] = useState(0);
  const handleNextInvalidQuestion = useCallback(() => {
    props.push(`/app/a/${props.activityId}/g/${props.groupLookup[nextInvalidQuestion]}/q/${nextInvalidQuestion}`);
    const currentInvalidQuestionIndex = errorAndTouchedArr.findIndex(e => e === nextInvalidQuestion);
    const totalInvalidQuestions = errorAndTouchedArr.length; // ['question1', 'question2']
    const nextNextInvalidQuestion = errorAndTouchedArr[(currentInvalidQuestionIndex+totalInvalidQuestions+1)%totalInvalidQuestions];
    setNextInvalidQuestion(nextNextInvalidQuestion);
  })
  React.useEffect(() => {
    const numQues = Object.keys(values).length;
    const numAnsQues = Object.keys(values).reduce((acc, q) => {
      return values[q] && !errors[q] ? acc + 1 : acc;
    }, 0);
    const errorAndTouchedArr = Object.keys(errors).reduce((acc, e) => {
      return errors[e] && touched[e] ? [e, ...acc] : acc;
    }, []);
    setNumQues(numQues);
    setNumAnsQues(numAnsQues);
    setErrorAndTouchedArr(errorAndTouchedArr);
    setNumErrors(errorAndTouchedArr.length);
    setNextInvalidQuestion(errorAndTouchedArr[0]);
  }, [values, errors, touched, submitForm]);
  return (
    <>
      { numErrors > 0 &&
        <div
          className="progress-invalid-message"
          onClick={handleNextInvalidQuestion}
        >
          {`${numErrors} invalid question${numErrors > 1 ? 's' : ''}`}
        </div>
      }
      <progress
        className="progress is-small"
        value={numAnsQues}
        max={numQues}
      >
        {numAnsQues}
      </progress>
      <div className="progress-count">{ !props.activityIsLoaded ? 'Loading...' : `${numAnsQues}/${numQues}` }</div>
    </>
  );
});

export default Progress;
