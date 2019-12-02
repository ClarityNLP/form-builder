import React, { Component } from 'react';
import NavbarTop from '../containers/navbar_top_container';
import NavbarLeft from '../containers/navbar_left_container';
import FormPanel from '../containers/form_panel_container';
import EvidencePanel from '../containers/evidence_panel_container';
import Catalog from '../containers/catalog_container';
import Transient from './Transient';
import { oauth2 as SMART } from 'fhirclient';
import queryString from 'query-string'

export default class FormBuilder extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.getFhirClient(SMART)
      .then(client => this.props.getDocumentReferences(client))
      .then((docs) => this.props.getSourceId(docs));
  }

  render() {
    const { isLoaded : sourceIsFulfilled } = this.props.source;

    return !sourceIsFulfilled ? (
      <Transient/>
    ) : (
      <div className="form-builder">
        <NavbarTop/>
        <div className="workspace">
          <NavbarLeft params={this.props.match.params}/>
          <FormPanel params={this.props.match.params} search={queryString.parse(this.props.location.search)}/>{/* TODO -- look into doing fetch for form here instead of in FormPanel comp. */}
          <EvidencePanel/>
          <Catalog/>
        </div>
      </div>
    );
  }
}
