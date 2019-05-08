import React, { Component } from 'react';
import Form from './Form';

export default class Main extends Component {
  componentWillMount() {
    this.props.setForm();
  }

  render() {
    return <Form />;
  }
}
