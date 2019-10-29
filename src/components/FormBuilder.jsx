import React, { Component } from 'react';
import NavbarTop from '../containers/navbar_top_container';
import NavbarLeft from '../containers/navbar_left_container';
import FormPanel from '../containers/form_panel_container';
import DecisionSupportPanel from '../containers/decision_support_panel_container';

export default class FormBuilder extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('props here: ',this.props);
    return (
      <div className="form-builder">
        <NavbarTop/>
        <div className="workspace">
          <NavbarLeft/>
          <FormPanel/>
          <DecisionSupportPanel/>
        </div>
      </div>
    )
  }
}
