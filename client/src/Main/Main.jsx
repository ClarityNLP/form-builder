import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import Loader from '../Loader';

export default class Main extends Component {
  componentWillMount() {
    this.props.setSmart().then(smart => {
      this.props.setPatient(smart);
    });

    if (!this.props.app.form) this.props.setForm();
  }

  render() {
    const { loading_patient, loading_smart } = this.props.app;

    const loading = loading_patient || loading_smart;

    return loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Header />
        <Form />
      </React.Fragment>
    );
  }
}
