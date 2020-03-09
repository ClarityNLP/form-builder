import React, { Component } from 'react';

export default class StartActivity extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { patientId, formSlug } = this.props;
    return this.props.resolveActivityId(patientId, formSlug)
      .then(activityId => this.props.replace(`/app/a/${activityId}`));
  }

  render() {
    return null;
  }
}
