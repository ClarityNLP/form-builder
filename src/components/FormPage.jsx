import React, { Component } from "react";
import Question from './Question';
import queryString from 'query-string';
import { Route, Switch, Redirect } from 'react-router-dom';

class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      questionsAllIds,
      activity : activityId,
      group : groupSlug,
      location
    } = this.props;

    const { isLast } = queryString.parse(location.search, {parseBooleans: true});

    return (
      <Switch>
        <Route
          path="/app/a/:activityId/g/:groupSlug/q/:questionSlug"
        >
        {questionsAllIds.map((questionSlug, index) => {
          return (
            <Route
              key={index}
              path={`/app/a/:activityId/g/:groupSlug/q/${questionSlug}`}
              children={({ match, history }) => (
                <Question
                  key={index}
                  isFocused={match}
                  search={location.search}
                  push={history.push}
                  activityId={activityId}
                  forwardedRef={React.createRef()}
                  groupSlug={groupSlug}
                  questionSlug={questionSlug}
                />
              )}
            />
          )
        })}
        </Route>
        <Redirect to={isLast ?
          `/app/a/${activityId}/g/${groupSlug}/q/${questionsAllIds[questionsAllIds.length - 1]}`
          :
          `/app/a/${activityId}/g/${groupSlug}/q/${questionsAllIds[0]}`
        }/>
      </Switch>
    )
  }
}

export default FormPage;
