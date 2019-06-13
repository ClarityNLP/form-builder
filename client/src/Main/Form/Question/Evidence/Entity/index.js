import React, { Component } from 'react';
import { Button } from 'reactstrap';

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

  getHighlightedText(text, highlights) {
    if (!highlights) {
      return text;
    }

    if (!text) {
      return '';
    }

    const h = highlights[2];

    const splitText = text.split(h);
    const matches = text.match(h);

    return splitText.reduce(
      (arr, element, index) =>
        matches[index]
          ? [
              ...arr,
              element,
              <span key={'highlight' + index} className='highlight'>
                {matches[index]}
              </span>
            ]
          : [...arr, element],
      []
    );
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

  render() {
    const { displayText, toggle } = this.state;

    return (
      <Button
        outline
        block
        className={toggle ? 'entity active' : 'entity'}
        onClick={this.toggle}
      >
        <div>{displayText}</div>
      </Button>
    );
  }
}
