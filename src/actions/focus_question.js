export function focusQuestion(question) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'FOCUS_QUESTION',
        data: question
      })
      resolve();
    });
  }
}
