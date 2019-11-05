import React, { Component } from 'react';
import NavbarTop from '../containers/navbar_top_container';
import NavbarLeft from '../containers/navbar_left_container';
import FormPanel from '../containers/form_panel_container';
import EvidencePanel from '../containers/evidence_panel_container';
import Transient from './Transient';
import { oauth2 as SMART } from 'fhirclient';

export default class FormBuilder extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.getFhirClient(SMART)
      .then(client => this.props.getDocumentReferences(client));
  }

  render() {
    const { patient } = this.props.patient.data;

    return false ? (
      <Transient/>
    ) : (
      <div className="form-builder">
        <NavbarTop/>
        <div className="workspace">
          <NavbarLeft/>
          <FormPanel/>
          <EvidencePanel/>
        </div>
      </div>
    );
  }
}
