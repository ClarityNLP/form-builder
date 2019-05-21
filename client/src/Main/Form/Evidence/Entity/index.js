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
      keyword: this.getKeyword(),
      mainText: this.getMainText(),
      feedback: null,
      commentModalToggle: false,
      comment: ''
    };
  }

  toggleReportText = e => {
    this.setState(prevState => ({
      reportTextToggle: !prevState.reportTextToggle
    }));
  };

  getKeyword = () => {
    const { start, end, sentence } = this.props.result;

    if (start === 0 && end === 0) {
      return sentence;
    }

    const keyword = sentence.substr(start, end - start);
    return keyword;
  };

  getMainText = () => {
    const { start, end, sentence } = this.props.result;

    const keyword = this.getKeyword();
    const first = sentence.substr(0, start);
    const last = sentence.substr(
      end,
      sentence.length - first.length - keyword.length
    );

    return (
      <React.Fragment>
        {first}
        <span className='highlight'>{keyword}</span>
        {last}
      </React.Fragment>
    );
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
    const { report_date, report_text, report_type } = this.props.result;
    const {
      keyword,
      mainText,
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
                  <Moment format='MMM DD, YYYY HH:MM'>{report_date}</Moment>
                </h6>
              </Col>
              <Col className='text-center'>
                <h6>{report_type}</h6>
              </Col>
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
                </ButtonGroup>
                <Button
                  onClick={this.toggleComment}
                  className='entity_icon'
                  size='sm'
                  outline
                >
                  <FaTag />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs='12' className='pt-1'>
            {mainText}
          </Col>
          <Col xs='12' className='text-center'>
            <Button
              color='link'
              className='chevron'
              onClick={this.toggleReportText}
            >
              <FaChevronDown />
            </Button>
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
            <pre className='report_text'>{report_text}</pre>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
