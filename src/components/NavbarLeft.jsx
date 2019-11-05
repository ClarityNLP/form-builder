import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import idx from 'idx';

export default class NavbarLeft extends Component {

  constructor(props) {
    super(props);

    this.refs = {};
  }

  getRefs = (groups) => {
    return groups.reduce((acc, g) => {
      acc[g] = React.createRef();
      return acc;
    }, {});
  }

  keyPressed = (event) => {
    if (event.keyCode === 37) { // left arrow
      event.preventDefault();
      const currentGroupIndex = this.props.form.groups.findIndex(group => slugify(group) === this.props.pathname.substr(this.props.pathname.lastIndexOf('/') + 1));
      if (currentGroupIndex > 0) {
        this.props.push(slugify(this.props.form.groups[currentGroupIndex - 1]));
        this.refs[this.props.form.groups[currentGroupIndex - 1]].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
    if (event.keyCode === 39) { // right arrow
      event.preventDefault();
      const currentGroupIndex = this.props.form.groups.findIndex(group => slugify(group) === this.props.pathname.substr(this.props.pathname.lastIndexOf('/') + 1));
      if (currentGroupIndex < this.props.form.groups.length - 1) {
        this.props.push(slugify(this.props.form.groups[currentGroupIndex + 1]));
        this.refs[this.props.form.groups[currentGroupIndex + 1]].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }

  componentDidMount(){
    if (idx(this.props, _ => _.form.groups)) {
      this.refs = this.getRefs(this.props.form.groups);
    }
    document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    const { groups } = this.props.form;
    const { pathname } = this.props;

    function isGroupLoading(groups, group) {
      return idx(groups, _ => _[group].isLoading);
    }

    return (
      <div className="navbar-left">
        <aside className="menu">
          <ul className="menu-list">
            {groups.map((group, index) => {
              return (
                <li
                  key={index}
                  ref={this.refs[group]}
                >
                  <Link
                    to={`/app/${slugify(group)}`}
                    className={`group-link ${isGroupLoading(this.props.evidenceByGroup, group) ? 'is-loading' : ''} ${slugify(group) === pathname.substr(pathname.lastIndexOf('/') + 1) ? 'is-active' : ''}`}
                  >
                    <div className="group-loader">
                      <div className="group-loader-border"></div>
                      <div className="group-loader-content"></div>
                    </div>
                    <div className="group-link-text">{group}</div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    )
  }
}
