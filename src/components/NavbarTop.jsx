import React, { Component } from 'react';

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

  render() {
    return (
      <React.Fragment>
        <div className="navbar-top">
          <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <b>Form 4100 R4.0</b>
              </a>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a
                  className="navbar-item"
                  onClick={this.toggleHowToUseIsActive}
                >
                  How to Use
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    Change Version
                  </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      Form 4100 R4.1
                    </a>
                    <a className="navbar-item">
                      Form 4100 R4.2
                    </a>
                    <a className="navbar-item">
                      Form 4100 R4.3
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item progress-bar">
                  <progress className="progress is-small" value="15" max="100">15></progress>
                  <div className="progress-count">50/193</div>
                </div>
                <div className="navbar-item">
                  <div className="button is-light">Submit</div>
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
                  <span>Use the <strong>left and right arrow keys</strong> to navigate between question groups. The question groups are shown the menu on the left side of the screen.</span>
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
                    <div className="question-number">
                      <div className="question-number-bubble">
                        <div className="question-number-bubble-border"></div>
                        <div className="question-number-bubble-content">12</div>
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
                    <div className="question-number">
                      <div className="question-number-bubble">
                        <div className="question-number-bubble-border"></div>
                        <div className="question-number-bubble-content">12</div>
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
                    <div className="question-number">
                      <div className="question-number-bubble">
                        <div className="question-number-bubble-border"></div>
                        <div className="question-number-bubble-content">12</div>
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
                    <div className="question-number">
                      <div className="question-number-bubble">
                        <div className="question-number-bubble-border"></div>
                        <div className="question-number-bubble-content">12</div>
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
                    <div className="question-number">
                      <div className="question-number-bubble">
                        <div className="question-number-bubble-border"></div>
                        <div className="question-number-bubble-content">12</div>
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
