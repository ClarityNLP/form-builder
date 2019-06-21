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
    const { form } = this.props.app;
    const { start, end } = this.props.app.index_date;

    const today = new Date();

    return (
      <Row className='header'>
        <Col xs={2}>
          <h4>{form.name}</h4>
        </Col>
        <Col xs={5} />
        <Col xs={5}>
          <FormGroup row>
            <Col xs={5}>
              <Input
                type='date'
                // max={this.convertDateToString(today)}
                value={this.convertDateToString(start)}
                onChange={e => {
                  this.handleDateChange(e, 'start');
                }}
              />
            </Col>
            <Label xs={2} className='text-center'>
              -
            </Label>
            <Col xs={5}>
              <Input
                type='date'
                // min={this.convertDateToString(start)}
                // max={this.convertDateToString(today)}
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
