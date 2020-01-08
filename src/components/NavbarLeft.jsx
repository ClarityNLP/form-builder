import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import idx from 'idx';
import isEqual from 'lodash/isEqual';

class NavbarLeft extends Component {

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

  scrollToGroup = (groupIndex, behavior) => {
    this.refs[groupIndex].current.scrollIntoView({
      behavior: behavior || 'auto',
      block: 'center',
    });
  }

  keyPressed = (event) => {
    const { form, groupSlug: groupSlugFromPath } = this.props;
    if (event.keyCode === 37) { // left arrow
      event.preventDefault();
      const currentGroupIndex = form.groups.allIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
      if (currentGroupIndex > 0) {
        this.props.push(form.groups.allIds[currentGroupIndex - 1]);
        this.refs[form.groups.allIds[currentGroupIndex - 1]].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
    if (event.keyCode === 39) { // right arrow
      event.preventDefault();
      const currentGroupIndex = form.groups.allIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
      if (currentGroupIndex < form.groups.allIds.length - 1) {
        this.props.push(form.groups.allIds[currentGroupIndex + 1]);
        this.refs[form.groups.allIds[currentGroupIndex + 1]].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }

  componentDidMount(){
    // if (idx(this.props, _ => _.form.groups)) {
    //
    //   this.refs = this.getRefs(this.props.form.groups.allIds);
    // }
    // document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount(){
    // document.removeEventListener("keydown", this.keyPressed, false);
  }

  componentDidUpdate(prevProps) {
    const { formSlug, groupSlug, form } = this.props;

    // if (this.props.form.content !== prevProps.form.content) { //TODO maybe change...
    //   if (idx(this.props, _ => _.form.content.groups)) {
    //     return this.refs = this.getRefs(this.props.form.content.groups);
    //   }
    // }

    // if (prevProps.form.isLoading && !form.isLoading) { //TODO maybe change...
    //   return this.refs = this.getRefs(form.groups.allIds);
    // }

    // if ((groupSlug !== prevProps.groupSlug) && groupSlug) {
    //   if (!form.groups.allIds.includes(prevProps.groupSlug)) {
    //     return;
    //   }
    //   return this.scrollToGroup(groupSlug, 'auto');
    // }
  }

  render() {
    const {
      formIsLoaded,
      formSlug,
      groups,
    } = this.props;

    // function isGroupLoading(groups, group) {
    //   return idx(groups, _ => _[group].isLoading);
    // }

    function GroupItemLink({to, ref, name}) {
      return (
        <Route
          path={to}
          children={({ match }) => (
            <li
              ref={ref}
            >
              <Link
                to={to}
                className={`group-link ${match ? "is-active" : ""}`}
              >
                {/* TODO add isGroupLoading back in (use clsx)... --> className={`group-link ${isGroupLoading(this.props.evidenceByGroup, group) ? 'is-loading' : ''} ${slugify(group) === pathname.substr(pathname.lastIndexOf('/') + 1) ? 'is-active' : ''}`}*/}
                <div className="group-loader">
                  <div className="group-loader-border"></div>
                  <div className="group-loader-content"></div>
                </div>
                <div className="group-link-text">{name}</div>
              </Link>
            </li>
          )}
        />
      );
    }

    return (
      <div className="navbar-left">
        <aside className="menu">
          <ul className="menu-list">
            { formIsLoaded &&
              <React.Fragment>
              {groups.allIds.map((groupSlug, index) => {
                return (
                  <GroupItemLink
                    key={index}
                    ref={this.refs[groupSlug]}
                    to={`/app/f/${formSlug}/g/${groupSlug}`}
                    name={groups.byId[groupSlug].name}
                  />
                )
              })}
              </React.Fragment>
            }
          </ul>
        </aside>
      </div>
    )
  }
}

export default NavbarLeft
