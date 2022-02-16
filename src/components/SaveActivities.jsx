import React, { useState } from 'react';
import { useFormikContext } from 'formik';


function SaveActivities(props) {
  // Grab values and submitForm from context
  const { values, errors, touched } = useFormikContext();
  const [numAnsQues, setNumAnsQues] = useState(0);
  const [numQues, setNumQues] = useState(0);
  const [numErrors, setNumErrors] = useState(0);


  React.useEffect(() => {
    const numQues = Object.keys(values).length;
    const numAnsQues = Object.keys(values).reduce((acc, q) => {
      return values[q] && !errors[q] ? acc + 1 : acc;
    }, 0);
    const numErrors = Object.keys(errors).reduce((acc, e) => {
      return errors[e] && touched[e] ? acc + 1 : acc;
    }, 0);
    setNumQues(numQues);
    setNumAnsQues(numAnsQues);
    setNumErrors(numErrors);
  }, [values, errors, touched, submitForm]);
  return (
    <div className="button is-light nav-button" disabled={numErrors}>View Activities</div>
  );
};

export default SaveActivities;
