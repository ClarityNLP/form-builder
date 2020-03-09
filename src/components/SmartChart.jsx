import React, { Component } from 'react';
import Transient from './Transient';
import Workspace from '../containers/workspace_container';
import { oauth2 as SMART } from 'fhirclient';

export default class SmartChart extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.getFhirClient(SMART)
      .then(client => this.props.getFhirRelease(client))
      .then(client => this.props.getDocumentReferences(client))
      .then((docs) => this.props.getSourceId(docs));
  }

  render() {
    const { isLoaded : sourceIsFulfilled } = this.props.source;

    return false ? (
      <Transient/>
    ) : (
      <Workspace activityId={this.props.activityId}/>
    );
  }
}
