import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';

export default class Main extends Component {
  componentWillMount() {
    if (!this.props.app.form) this.props.setForm();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
      </React.Fragment>
    );
  }
}
