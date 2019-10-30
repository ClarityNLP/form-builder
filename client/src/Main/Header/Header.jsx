import React, { Component } from 'react';
import { Row, Col, FormGroup, Input, Label } from 'reactstrap';

export default class Header extends Component {
  handleDateChange = (e, param) => {
    const { index_date } = this.props.app;
    const { value } = e.target;

    const parts = value.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    const current = new Date();

    const newDate =
      value === ''
        ? null
        : new Date(
            year,
            month - 1,
            day,
            current.getHours(),
            current.getMinutes(),
            current.getSeconds(),
            current.getMilliseconds()
          );

    this.props.setDate({
      ...index_date,
      [param]: newDate
    });
  };

  convertDateToString = date => {
    if (!date) return '';

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;

    return [year, month, day].join('-');
  };

  render() {
    const { patient, form } = this.props.app;
    const { start, end } = this.props.app.index_date;

    return (
      <Row className='header align-content-center'>
        <Col xs={7}>
          <h1>{this.props.app.smart.state.tokenResponse.access_token}</h1>
          <div>
            <h5>{patient.data ? patient.data.name[0].text : null}</h5>
          </div>
          <div>{form ? form.name : null}</div>
        </Col>

        <Col xs={5}>
          <FormGroup row className='justify-content-end'>
            <Col xs={5}>
              <Label>From:</Label>
              <Input
                type='date'
                value={this.convertDateToString(start)}
                onChange={e => {
                  this.handleDateChange(e, 'start');
                }}
              />
            </Col>
            <Col xs={5}>
              <Label>To:</Label>
              <Input
                type='date'
                value={this.convertDateToString(end)}
                onChange={e => {
                  this.handleDateChange(e, 'end');
                }}
              />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}
