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
import { FaThumbsUp, FaThumbsDown, FaTag, FaChevronDown } from 'react-icons/fa';

export default class Entity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reportTextToggle: false,
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

    if (text === '' || highlights.length < 1) return text;

    let s = text;
    let foundText = /[0-9]:REPLACETEXT/g;

    for (let h in highlights) {
      let highlight = highlights[h]
        .toString()
        .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      if (highlight.trim() === '') break;

      try {
        highlight = new RegExp(highlight, 'g');
      } catch (e) {
        console.log('Error:', e);
      }

      s = s.replace(highlight, this.replacer(h));
    }

    const splitText = s.split(foundText);
    const matches = s.match(foundText);

    if (splitText.length > 1) {
      return splitText.reduce(
        (arr, element, index) =>
          matches[index]
            ? [
                ...arr,
                element,
                <span key={'highlight' + index} className='full-highlighting'>
                  {highlights[parseInt(matches[index], 10)]}
                </span>
              ]
            : [...arr, element],
        []
      );
    } else {
      return text;
    }
  }

  toggleReportText = e => {
    this.setState(prevState => ({
      reportTextToggle: !prevState.reportTextToggle
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
    const { result_display, report_text, report_type } = this.props.result;
    const { date, result_content, highlights, sentence } = result_display;
    const {
      commentModalToggle,
      reportTextToggle,
      feedback,
      comment
    } = this.state;

    return (
      <div className='entity'>
        <Row>
          <Col xs='12'>
            <Row>
              <Col>
                <h6>
                  <Moment format='MMM DD, YYYY HH:MM'>{date}</Moment>
                </h6>
              </Col>
              <Col className='text-center'>
                <h6>{report_type}</h6>
              </Col>
              <Col className='text-right'>
                <ButtonGroup>
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
                    <FaThumbsUp />
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
                    <FaThumbsDown />
                  </Button>

                  <Button
                    onClick={this.toggleComment}
                    className='entity_icon'
                    size='sm'
                    outline
                  >
                    <FaTag />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
          <Col xs='12' className='pt-1'>
            <p>{this.getHighlightedText(result_content, highlights)}</p>
          </Col>
          {sentence !== '' ? (
            <Col xs='12' className='pt-1'>
              <p>{this.getHighlightedText(sentence, highlights)}</p>
            </Col>
          ) : null}
          <Col xs='12' className='text-center'>
            {report_text.trim() !== '' ? (
              <Button
                color='link'
                className='chevron'
                onClick={this.toggleReportText}
              >
                <FaChevronDown />
              </Button>
            ) : null}
          </Col>
        </Row>

        <Modal isOpen={commentModalToggle} toggle={this.toggleComment}>
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
        </Modal>
      </div>
    );
  }
}
