import React, { Component } from "react";
import Question from './Question';
import queryString from 'query-string';
import { Route, Switch, Redirect } from 'react-router-dom';
import isEqual from 'lodash/isEqual';

class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !isEqual(this.props, nextProps) ? true : false;
  // }

  render() {
    const {
      questionsAllIds,
      activityId,
      groupSlug,
      location,
      push
    } = this.props;

    const { isLast } = queryString.parse(location.search, {parseBooleans: true});

    function QuestionItemLink({to, ...rest}) {
      return (
        <Route
          path={to}
          children={({ match, location }) => (
            <Question
              isFocused={match}
              location={location}
              {...rest}
            />
          )}
        />
      );
    }

    return (
      <Switch>
        <Route
         path="/app/a/:activityId/g/:groupSlug/q/:questionSlug"
        >
          {questionsAllIds.map((questionSlug, index) => {
            return (
              <QuestionItemLink
                key={index}
                forwardedRef={React.createRef()}
                push={push}
                to={`/app/a/:activityId/g/:groupSlug/q/${questionSlug}`}
                activityId={activityId}
                groupSlug={groupSlug}
                questionSlug={questionSlug}
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
