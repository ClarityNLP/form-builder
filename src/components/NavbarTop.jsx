import React, { Component } from 'react';

export default class NavbarTop extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
              <a className="navbar-item">
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
    )
  }
}
