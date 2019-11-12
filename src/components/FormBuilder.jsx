import React, { Component } from 'react';
import NavbarTop from '../containers/navbar_top_container';
import NavbarLeft from '../containers/navbar_left_container';
import FormPanel from '../containers/form_panel_container';
import EvidencePanel from '../containers/evidence_panel_container';
import Catalog from '../containers/catalog_container';
import Transient from './Transient';
import { oauth2 as SMART } from 'fhirclient';

export default class FormBuilder extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.getFhirClient(SMART)
      .then(client => this.props.getDocumentReferences(client));
      //TODO add call to nlpaas to retrieve document(s) id
  }

  render() {
    const { patient } = this.props.patient.data;

    return !patient ? (
      <Transient/>
    ) : (
      <div className="form-builder">
        <NavbarTop/>
        <div className="workspace">
          <NavbarLeft params={this.props.match.params}/>
          <FormPanel params={this.props.match.params}/>{/* TODO -- look into doing fetch for form here instead of in FormPanel comp. */}
          <EvidencePanel/>
          <Catalog/>
        </div>
      </div>
    );
  }
}
