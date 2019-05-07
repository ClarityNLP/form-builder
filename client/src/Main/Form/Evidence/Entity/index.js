import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';

export default class Entity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      displayText: this.setHighlightText()
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  setHighlightText = () => {
    const { start, end, sentence } = this.props.result;

    if (start === 0 && end === 0) {
      return sentence;
    }

    const keyword = sentence.substr(start, end - start);
    const first = sentence.substr(0, start);
    const last = sentence.substr(
      end,
      sentence.length - first.length - keyword.length
    );

    return (
      <p>
        {first}
        <span className='highlight'>{keyword}</span>
        {last}
      </p>
    );
  };

  render() {
    const { report_text } = this.props.result;
    const { displayText, toggle } = this.state;

    return (
      <div className='entity mb-3' onClick={this.toggle}>
        <div>{displayText}</div>
        <Modal isOpen={toggle} toggle={this.toggle}>
          <ModalBody>
            <pre>{report_text}</pre>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
