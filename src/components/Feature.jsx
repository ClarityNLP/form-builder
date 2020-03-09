import React, { Component } from "react";
import * as moment from 'moment'
import { Row, Col } from 'reactstrap';//TODO remove and refactor
import Moment from 'react-moment';

class Feature extends Component {
  constructor(props) {
    super(props);
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

  titleize = (slug) => {
    var words = slug.split('_');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
  }

  render() {
    const {
      displayType,
      title,
      subtitle,
      cols,
      items
    } = this.props;

    switch(displayType) {
      case 'table': {
        return (
          <div className="evidence">
            <h6 className="evidence-report-type">{title}</h6>
            <h6 className="feature-subtitle">{subtitle}</h6>
            <div className="table-container">
              <table className="table is-narrow is-striped is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    {cols.map((col, index) => {
                      return (
                        <th key={index}>{col.label}</th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {items.map((r, index) => {
                    return (
                      <tr key={index}>
                        {cols.map((col, index) => {
                          return (
                            <React.Fragment key={index}>
                              { index === 0 ? (
                                <td><Moment format='MM/DD/YY'>{eval(col.value)}</Moment></td>
                              ) : (
                                <td>{eval(col.value)}</td>
                              )
                              }
                            </React.Fragment>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      }
      case 'cards': {
        return (
          <>
          {items.map((r, index) => {
            return (
              <div key={index} className="evidence">
                <Row>
                  <Col xs='12'>
                    <Row>
                      <Col>
                        <h6 className="evidence-report-type">{r.nlpql_feature ? this.titleize(r.nlpql_feature) : '<NO-REPORT-TYPE>'}</h6>
                        <h6 className="evidence-date">@&nbsp;<Moment format='MMM DD, YYYY HH:MM'>{r.date}</Moment></h6>
                      </Col>
                    </Row>
                  </Col>
                  <div
                    className="evidence-result-content"
                    onClick={null}
                  >
                    {(r.result_display.result_content || r.result_display.sentence) ? (
                      <React.Fragment>
                      {this.getHighlightedText(r.result_display.result_content || r.result_display.sentence, r.result_display.highlights)}
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
                      onClick={null}
                    >
                      <u>read more</u>
                    </span>
                    <span className="evidence-comment"><u>comment</u></span>
                  </div>
                </Row>
              </div>
            )
          })}
          </>
        )
      }
    }
  }
}

export default Feature;
