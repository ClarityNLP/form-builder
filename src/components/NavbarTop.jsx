import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormikContext } from 'formik';
import Progress from './Progress';
import Save from './Save';
import axios from 'axios';

export default class NavbarTop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      howToUseIsActive: false,
    };
  }

  toggleHowToUseIsActive = e => {
    this.setState(prevState => ({
      howToUseIsActive: !prevState.howToUseIsActive
    }));
  };

  viewActivities = e => {
    axios.get(`${window._env_.SMARTHUB_URL}/activities/${this.props.activityId}`)
        .then(res => {
          const { data: activity } = res;

          const jsonse = JSON.stringify(activity, null, 4);
          const blob = new Blob([jsonse], {type: "application/json"});
          const url  = URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href        = url;
          a.download    = "activities.json";
          a.textContent = "Download activities.json";
          a.style.visibility = "hidden";

          document.body.appendChild(a);
          a.click();

        })
        .catch(error => {
          console.log(error.message);
        })
  };

  render() {
    const {
      activityId,
      activityIsLoaded,
      formSlug,
      formName,
      groupLookup,
      push,
      catalog
    } = this.props;

    return (
      <React.Fragment>
        <div className="navbar-top">
          <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img src={`${process.env.PUBLIC_URL}/smartchart_white_v3.svg`}/>
              </a>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div className="navbar-menu">
              <div className="navbar-start">
                <div className="form-dropdown navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    <div className="form-dropdown-text">{activityIsLoaded ? formName : ''}</div>
                  </a>

                  <div className="navbar-dropdown">
                    { activityIsLoaded ? (
                      <React.Fragment>
                      {catalog.forms.map((form, index) => {
                        return (
                          <Link key={index} to={`/app/f/${form.slug}`} className={`navbar-item ${form.name === formName ? 'is-current' : ''}`}>
                            {form.name}
                          </Link>
                        )
                      })}
                      <hr className="navbar-divider"/>
                      <Link
                        className="navbar-item"
                        to="?showCatalog=true"
                      >
                        View Catalog
                      </Link>
                      </React.Fragment>
                    ) : (
                      <div className="navbar-item">Loading forms...</div>
                    )}
                  </div>
                </div>
                <a
                  className="navbar-item"
                  onClick={this.toggleHowToUseIsActive}
                >
                  How to Use
                </a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <Progress
                    activityId={activityId}
                    activityIsLoaded={activityIsLoaded}
                    groupLookup={groupLookup}
                    push={push}
                  />
                </div>
                <div className="navbar-item">
                  <Save/>
                  <div className="button is-light nav-button" onClick={this.viewActivities}>Download All Data</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={`how-to-use-modal modal ${this.state.howToUseIsActive ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">How to Use</p>
              <button
                type="button"
                className="delete"
                aria-label="close"
                onClick={this.toggleHowToUseIsActive}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="columns">
                <div className="column is-one-fifth">
                  <img src={`${process.env.PUBLIC_URL}/left_right_keys.svg`}/>
                </div>
                <div className="column is-four-fifths">
                  <span>Use the <strong>left and right arrow keys</strong> to navigate between question groups. The question groups are shown on the menu on the left side of the screen.</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <img src={`${process.env.PUBLIC_URL}/top_bottom_keys.svg`}/>
                </div>
                <div className="column is-four-fifths">
                  <span>Use the <strong>up and down arrow keys</strong> to navigate between questions within a group. The questions within a group are shown in the middle of the screen.</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <div className="indicator is-focus">
                    <div className="question-indicator">
                      <div className="question-indicator-bubble">
                        <div className="question-indicator-bubble-border"></div>
                        <div className="question-indicator-bubble-content">12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-four-fifths">
                  <span>This state means the question <strong>is focused</strong>. Evidence for the focused question will be shown on the right side of the screen.</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <div className="indicator is-loading">
                    <div className="question-indicator">
                      <div className="question-indicator-bubble">
                        <div className="question-indicator-bubble-border"></div>
                        <div className="question-indicator-bubble-content">12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-four-fifths">
                  <span>This state means the question <strong>is loading</strong>. Evidence for this question has not finished loading yet.</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <div className="indicator is-loading is-focus">
                    <div className="question-indicator">
                      <div className="question-indicator-bubble">
                        <div className="question-indicator-bubble-border"></div>
                        <div className="question-indicator-bubble-content">12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-four-fifths">
                  <span>This state means the question <strong>is focused and loading</strong>. Evidence for this question has not finished loading yet. When the evidence arrives, it will be on the right side of the screen.</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <div className="indicator is-error">
                    <div className="question-indicator">
                      <div className="question-indicator-bubble">
                        <div className="question-indicator-bubble-border"></div>
                        <div className="question-indicator-bubble-content">12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-four-fifths">
                  <span>This state means there was a <strong>problem getting the evidence for the question</strong>.</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <div className="indicator is-error is-focus">
                    <div className="question-indicator">
                      <div className="question-indicator-bubble">
                        <div className="question-indicator-bubble-border"></div>
                        <div className="question-indicator-bubble-content">12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-four-fifths">
                  <span>This state means there was a <strong>problem getting the evidence</strong> for the question and the <strong>question is focused</strong>.</span>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                type="button"
                className="button"
                onClick={this.toggleHowToUseIsActive}
              >Cancel</button>
            </footer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
