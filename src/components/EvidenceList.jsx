import React, { Component } from 'react';
import Feature from './Feature';
import BouncingBalls from './BouncingBalls';

export default class EvidenceList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      evidence,
      groupIsLoaded,
      isAutofillLoadError,
      autofillLoadError
    } = this.props;

    return (
      <div className="evidence-list">
        <>
        { evidence &&
          <>
          {evidence.isLoading &&
            <div className="is-loading">
              <BouncingBalls/>
            </div>
          }
          {evidence.isLoadError &&
            <div className="message is-danger">
              <div className="message-body">
                Problem loading evidence bundle: {evidence.errorMessage}
              </div>
            </div>
          }
          {isAutofillLoadError && !evidence.isLoading &&
            <div className="message is-warning">
              <div className="message-body">
                {`Issue autofilling question: ${autofillLoadError}`}
              </div>
            </div>
          }
          {(evidence.isLoaded || groupIsLoaded) &&
            <>
            {evidence.allIds.map((feature, index) => {
              if (evidence.byId[feature].items) {
                return (
                  <Feature key={index} {...evidence.byId[feature]}/>
                )
              }
            })}
            </>
          }
          </>
        }
        </>
      </div>
    )
  }
}
