import React, { Component } from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Button,
  ButtonGroup
} from 'reactstrap';

import Moment from 'react-moment';

export default class Entity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reportTextIsActive: false,
      feedback: null,
      commentModalToggle: false,
      comment: ''
    };
  }

  replacer = index => {
    return index + ':REPLACETEXT';
  };

  getHighlightedText(text, highlights) {
    if (!highlights) return text;

    if (!text) return '';

    if (text === '' || highlights.length <= 0) return text;

    let s = text;
    let foundText = /[0-9]:REPLACETEXT/g;

    for (let h in highlights) {
      let highlight = highlights[h].toString();
      if (highlight.trim() === '') break;

      highlight = new RegExp(highlight, 'g');

      s = s.replace(highlight, this.replacer(h));
    }

    const splitText = s.split(foundText);
    const matches = s.match(foundText);

    if (!matches) return text;

    const highlightedText = splitText.reduce(
      (arr, element, index) =>
        matches[index]
          ? [
              ...arr,
              element,
              <span key={'highlight' + index} className='highlight'>
                {highlights[parseInt(matches[index], 10)]}
              </span>
            ]
          : [...arr, element],
      []
    );

    return highlightedText;
  }

  toggleReportTextIsActive = e => {
    this.setState(prevState => ({
      reportTextIsActive: !prevState.reportTextIsActive
    }));
  };

  setFeedback = option => {
    this.setState({
      feedback: option
    });
  };

  toggleComment = () => {
    this.setState(prevState => ({
      commentModalToggle: !prevState.commentModalToggle
    }));
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmitComment = () => {
    this.toggleComment();
  };

  render() {
    const { result_display, report_text, report_type } = this.props.evidence;
    const { date, result_content, highlights, sentence } = result_display;
    const {
      commentModalToggle,
      reportTextIsActive,
      feedback,
      comment
    } = this.state;

    return (
      <div className='evidence'>
        <Row>
          <Col xs='12'>
            <Row>
              <Col>
                <h6 className="evidence-report-type">{report_type ? report_type : '<NO-REPORT-TYPE>'}</h6>
                <h6 className="evidence-date">@&nbsp;<Moment format='MMM DD, YYYY HH:MM'>{date}</Moment></h6>
              </Col>
            </Row>
          </Col>
          <div
            className="evidence-result-content"
            onClick={this.toggleReportTextIsActive}
          >
            {result_content ? (
              <React.Fragment>
              {this.getHighlightedText(result_content, highlights)}
              </React.Fragment>
            ) : (
              "<NO-RESULT-CONTENT>"
            )}
          </div>
          {/*{sentence !== '' ? (
            <div className="evidence-sentence">
              {this.getHighlightedText(sentence, highlights)}
            </div>
          ) : null}TODO ask about data structure and guarantees...*/}
          <div className="evidence-links">
            <span
              className="evidence-read-more"
              onClick={this.toggleReportTextIsActive}
            >
              <u>read more</u>
            </span>
            <span className="evidence-comment"><u>comment</u></span>
          </div>
        </Row>

        <div className={`evidence-report-modal modal ${reportTextIsActive ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{report_type ? report_type : '<NO-REPORT-TYPE>'}</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleReportTextIsActive}
              ></button>
            </header>
            <section className="modal-card-body">
              {report_text ? (
                <pre className='report_text'>
                {this.getHighlightedText(report_text, highlights)}
                </pre>
              ) : (
                "<NO-RESULT-TEXT>"
              )}
            </section>
            <footer className="modal-card-foot">
              <button className="button is-primary">Valid</button>
              <button className="button is-primary is-outlined">Not valid</button>
              <button
                className="button"
                onClick={this.toggleReportTextIsActive}
              >Cancel</button>
            </footer>
          </div>
        </div>

        {/*<Modal isOpen={commentModalToggle} toggle={this.toggleComment}>
          <ModalBody>
            <textarea
              className='comment_box'
              name='comment'
              value={comment}
              onChange={this.handleInputChange}
              placeholder='Enter your comment here.'
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleSubmitComment}>Submit Comment</Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={reportTextToggle}
          toggle={this.toggleReportText}
          className='report_text_box'
        >
          <ModalBody>
            <pre className='report_text'>
              {this.getHighlightedText(report_text, highlights)}
            </pre>
          </ModalBody>
        </Modal>*/}
      </div>
    );
  }
}
