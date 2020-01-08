import React, { Component } from 'react';
import BouncingBalls from './BouncingBalls';
import idx from 'idx';
import { withRouter, Link } from "react-router-dom";
import queryString from 'query-string'

class Catalog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      catelogIsVisible: false
    };
  }

  componentDidMount() {
    return this.props.getCatalogContent()
  }

  // componentDidMount() {
  //   const { location } = this.props;
  //   const { cat } = queryString.parse(location.search, {parseBooleans: true});
  //
  //   if (location.pathname === '/app/catelog' || cat) {
  //     this.setState({
  //       catelogIsVisible: true
  //     });
  //     return this.props.getCatalogContent()
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { location } = this.props;
  //   const prevPathname = idx(prevProps.location, _ => _.pathname);
  //   const { cat } = queryString.parse(location.search, {parseBooleans: true});
  //   const prevCat = queryString.parse(idx(prevProps.location, _ => _.search), {parseBooleans: true});
  //
  //   if (
  //     ((location.pathname === '/app/catelog') && (location.pathname !== prevPathname))
  //     ||
  //     (cat && (cat !== prevCat))
  //   ) {
  //     this.setState({
  //       catelogIsVisible: true
  //     });
  //     return this.props.getCatalogContent()
  //   }
  //
  //   if (
  //     ((location.pathname !== '/app/catelog') && (location.pathname !== prevPathname))
  //     ||
  //     (!cat && (cat !== prevCat))
  //   ) {
  //     this.setState({
  //       catelogIsVisible: false
  //     });
  //   }
  // }

  handleCloseCatalog = () => {
    return this.props.closeCatalog();
  };

  render() {
    const { catelogIsVisible } = this.state;

    return (
      <div className={`catalog modal ${true ? 'is-active' : ''}`}>
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
                        <Link
                          to={`/app/f/${form.slug}`}
                          className={`catalog-item ${form.name === idx(this.props, _ => _.form.content.name) ? 'is-current' : ''}`}
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

export default withRouter(Catalog)
