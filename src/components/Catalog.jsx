import React, { Component } from 'react';
import BouncingBalls from './BouncingBalls';
import idx from 'idx';

export default class Catalog extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.getCatalogContent()
  }

  handleGetForm = (slug) => {
    return this.props.push(`/app/${slug}`);
  };

  handleCloseCatalog = () => {
    return this.props.closeCatalog();
  };

  render() {
    return (
      <div className={`catalog modal ${this.props.catalog.isVisible ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Catalog</p>
            { this.props.form.content &&
              <button
                className="delete"
                aria-label="close"
                onClick={this.handleCloseCatalog}
              ></button>
            }
          </header>
          <section className={`modal-card-body ${this.props.catalog.isLoading ? 'is-loading' : ''}`}>
            { this.props.catalog.isLoading ? (
              <BouncingBalls/>
            ) : (
              <React.Fragment>
                { this.props.form.isLoadError &&
                  <div className="message is-danger">
                    <div className="message-body">{`Problem loading form. ${this.props.form.errorMessage}`}</div>
                  </div>
                }
                <div className="columns is-multiline">
                  {this.props.catalog.forms.map((form, index) => {
                    return (
                      <div className="column is-one-third" key={index}>
                        <div
                          className={`catalog-item ${form.name === idx(this.props, _ => _.form.content.name) ? 'is-current' : ''}`}
                          onClick={() => this.handleGetForm(form.slug)}
                        >
                          <div className="catalog-item-header">
                            <div className="catalog-item-title">{form.name}</div>
                          </div>
                          <hr className="catalog-hr"/>
                          <div className="catalog-footer">
                            <div className="catalog-footer-owner">{form.description || 'This is a short description about the form.'}</div>
                          </div>
                          { form.name === idx(this.props, _ => _.form.content.name) &&
                            <div className="catalog-current-label">Current</div>
                          }
                        </div>

                      </div>
                    )
                  })}
                </div>
              </React.Fragment>
            )}
          </section>
        </div>
      </div>
    )
  }
}
