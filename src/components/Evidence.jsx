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
    console.log('clicked...')
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
                <h6 className="evidence-report-type">{report_type}</h6>
                <h6 className="evidence-date">@&nbsp;<Moment format='MMM DD, YYYY HH:MM'>{date}</Moment></h6>
              </Col>
              {/*
              <Col className='text-right'>
                <ButtonGroup className='pr-1'>
                  <Button
                    onClick={() => {
                      this.setFeedback(1);
                    }}
                    className={
                      feedback === 1 ? 'entity_icon active' : 'entity_icon'
                    }
                    size='sm'
                    outline
                  >
                    thumb_up
                  </Button>
                  <Button
                    onClick={() => {
                      this.setFeedback(2);
                    }}
                    className={
                      feedback === 2 ? 'entity_icon active' : 'entity_icon'
                    }
                    size='sm'
                    outline
                  >
                    thumb_down
                  </Button>
                </ButtonGroup>
                <Button
                  onClick={this.toggleComment}
                  className='entity_icon'
                  size='sm'
                  outline
                >
                  tag
                </Button>
              </Col>*/}
            </Row>
          </Col>
          <div className="evidence-result-content">
            {this.getHighlightedText(result_content, highlights)}
          </div>
          {sentence !== '' ? (
            <div className="evidence-sentence">
              {this.getHighlightedText(sentence, highlights)}
            </div>
          ) : null}
          {/*
          <Col xs='12' className='text-center'>
            {report_text.trim() !== '' ? (
              <Button
                color='link'
                className='chevron'
                onClick={this.toggleReportText}
              >
                chev_down
              </Button>
            ) : null}
          </Col>
          */}
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

        <div className={`modal ${reportTextIsActive ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleReportTextIsActive}
              ></button>
            </header>
            <section className="modal-card-body">
              <pre className='report_text'>
                {this.getHighlightedText(report_text, highlights)}
            </pre>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-primary">Approve</button>
              <button className="button is-primary">Dis</button>
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
