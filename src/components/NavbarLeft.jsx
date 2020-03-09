import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import clsx from 'clsx';

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

  componentDidMount(){
    if (this.props.activityIsLoaded) { //NOTE: basically will never be true...
      // return this.refs = this.getRefs(this.props.groups.allIds);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activityIsLoaded && !prevProps.activityIsLoaded) {
      // this.refs = this.getRefs(this.props.groups.allIds);
    }

    if (this.props.match.params.groupSlug !== prevProps.match.params.groupSlug) {
      // this.scrollToGroup(this.props.match.params.groupSlug, 'auto');
    }
  }

  render() {
    const {
      activityIsLoaded,
      activityId,
      groups,
    } = this.props;

    function GroupItemLink({to, forwardedRef, name, isLoading}) {
      const classes = function createClasses(match) {
        return clsx(
          match && 'is-active',
          isLoading && 'is-loading'
        )
      }
      return (
        <Route
          path={to}
          children={({ match }) => (
            <li
              ref={forwardedRef}
            >
              <Link
                to={to}
                className={`group-link ${classes(match)}`}
              >
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
            { activityIsLoaded &&
              <React.Fragment>
              {groups.allIds.map((groupSlug, index) => {
                return (
                  <GroupItemLink
                    key={index}
                    forwardedRef={this.refs[groupSlug]}
                    to={`/app/a/${activityId}/g/${groupSlug}`}
                    name={groups.byId[groupSlug].name}
                    isLoading={groups.byId[groupSlug].isLoading}
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
