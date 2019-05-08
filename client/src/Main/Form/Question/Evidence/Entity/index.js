import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
      <span>
        {first}
        <span className='highlight'>{keyword}</span>
        {last}
      </span>
    );
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
