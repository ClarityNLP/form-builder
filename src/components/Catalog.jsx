import React, { Component } from 'react';
import BouncingBalls from './BouncingBalls';
import idx from 'idx';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import isEqual from 'lodash/isEqual';

class Catalog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      catalogIsVisible: false,
      showCloseButton: true
    };
  }

  match({match, location}) {
    if (match) {
      switch(match.path) {
        case "/app/catalog": {
          return {
            catalogIsVisible: true,
            showCloseButton: false
          };
        }
        case "/app/a/:activityId/g/:groupSlug/q/:questionSlug": {
          const { showCatalog } = queryString.parse(
            location.search,
            { parseBooleans: true }
          );
          return {
            catalogIsVisible: showCatalog,
            showCloseButton: true
          };
        }
        default: {
          return {
            catalogIsVisible: false,
            showCloseButton: false
          }
        }
      }
    }
    return {
      catalogIsVisible: false,
      showCloseButton: false
    };
  };



  componentDidMount() {
    this.props.getCatalogContent();
    const { catalogIsVisible, showCloseButton } = this.match(this.props);
    if (catalogIsVisible) {
      this.setState({
        catalogIsVisible: true,
        showCloseButton: showCloseButton
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { catalogIsVisible, showCloseButton } = this.match(this.props);
    const { catalogIsVisible: prevCatalogIsVisible } = this.match(prevProps);
    if (catalogIsVisible && !prevCatalogIsVisible) {
      return this.setState({
        catalogIsVisible: true,
        showCloseButton: showCloseButton
      });
    }
    if (!catalogIsVisible && prevCatalogIsVisible) {
      return this.setState({
        catalogIsVisible: false
      });
    }
  }

  render() {
    const { catalogIsVisible, showCloseButton } = this.state;
    const activityId = idx(this.props, _ => _.match.params.activityId);
    const groupSlug = idx(this.props, _ => _.match.params.groupSlug);
    const questionSlug = idx(this.props, _ => _.match.params.questionSlug);

    return (
      <div className={`catalog modal ${catalogIsVisible ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Catalog</p>
            { showCloseButton &&
              <Link
                to={`/app/a/${activityId}/g/${groupSlug}/q/${questionSlug}`}
                className="delete"
                aria-label="close"
              ></Link>
            }
          </header>
          <section className={`modal-card-body ${this.props.catalog.isLoading ? 'is-loading' : ''}`}>
            { this.props.catalog.isLoading ? (
              <BouncingBalls/>
            ) : (
              <React.Fragment>
                { this.props.activity.isLoadError &&
                  <div className="message is-danger">
                    <div className="message-body">{`Problem loading form. ${this.props.activity.errorMessage}`}</div>
                  </div>
                }
                <div className="columns is-multiline">
                  {this.props.catalog.forms.map((form, index) => {
                    return (
                      <div className="column is-one-third" key={index}>
                        <Link
                          to={`/app/f/${form.slug}`}
                          className={`catalog-item ${form.name === idx(this.props, _ => _.activity.name) ? 'is-current' : ''}`}
                        >
                          <div className="catalog-item-header">
                            <div className="catalog-item-title">{form.name}</div>
                          </div>
                          <hr className="catalog-hr"/>
                          <div className="catalog-footer">
                            <div className="catalog-footer-owner">{form.description || 'This is a short description about the form.'}</div>
                          </div>
                          { form.name === idx(this.props, _ => _.activity.name) &&
                            <div className="catalog-current-label">Current</div>
                          }
                        </Link>

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

export default Catalog
