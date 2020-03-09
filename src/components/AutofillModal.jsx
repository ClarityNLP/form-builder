import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BouncingBalls from './BouncingBalls';
import PrettyPrintJson from './PrettyPrintJson';
import axios from 'axios';

class AutofillModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      documentIsLoading: true,
      documentIsLoadError: false,
      documentIsLoadErrorMessage: null,
      document: null
    }
  }

  componentDidMount() {
    console.log('autofill props: ',this.props);
    const { autofillId } = this.props;

    if (autofillId) {
      return axios
        .get(`${window._env_.SMARTHUB_URL}/autofills/${autofillId}/evidence`)
        .then(res => {
          const { data: document } = res;
          this.setState({
            document: document,
            documentIsLoading: false,
            documentIsLoadError: false,
            documentIsLoadErrorMessage: null
          });
        })
        .catch(error => {
          this.setState({
            document: null,
            documentIsLoading: false,
            documentIsLoadError: true,
            documentIsLoadErrorMessage: error
          });
        });
    }
  }

  componentDidUpdate(prevProps) {
    const { autofillId } = this.props;
    if ((autofillId !== prevProps.autofillId) && autofillId) {
      return axios
        .get(`${window._env_.SMARTHUB_URL}/autofills/${autofillId}/evidence`)
        .then(res => {
          const { data: document } = res;
          this.setState({
            document: document,
            documentIsLoading: false,
            documentIsLoadError: false,
            documentIsLoadErrorMessage: null
          });
        })
        .catch(error => {
          this.setState({
            document: null,
            documentIsLoading: false,
            documentIsLoadError: true,
            documentIsLoadErrorMessage: error
          });
        });
    }
  }

  render() {
    const { activityId, groupSlug, questionSlug } = this.props.params;
    return (
      <div className={`autofill modal ${true ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Autofill Trace</p>
            <Link
              to={`/app/a/${activityId}/g/${groupSlug}/q/${questionSlug}`}
              className="delete"
              aria-label="close"
            ></Link>
          </header>
          <section
            className={`modal-card-body ${this.state.documentIsLoading ? 'is-loading' : ''}`}
          >
            { this.state.documentIsLoading ? (
              <BouncingBalls/>
            ) : (
              <>
                { this.state.documentIsLoadError &&
                  <div className="message is-danger">
                    <div className="message-body">{`Problem loading matching document. ${this.state.documentIsLoadErrorMessage}`}</div>
                  </div>
                }
                <p>Command:</p>
                <PrettyPrintJson data={this.props.autofill}/>
                <p>Matching document:</p>
                <PrettyPrintJson data={this.state.document.evidence}/>
                <p>Value:</p>
                <PrettyPrintJson data={this.state.document.value}/>
              </>
            )}
          </section>
        </div>
      </div>
    )
  }
}

export default AutofillModal
