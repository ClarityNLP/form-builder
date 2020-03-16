import React, { Component, memo } from 'react';
import { Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { diff } from 'deep-diff';

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
      return this.refs = this.getRefs(this.props.groups.allIds);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activityIsLoaded && !prevProps.activityIsLoaded) {
      this.refs = this.getRefs(this.props.groups.allIds);
    }

    if (this.props.match.params.groupSlug !== prevProps.match.params.groupSlug) {
      this.scrollToGroup(this.props.match.params.groupSlug, 'auto');
    }
  }

  render() {
    const {
      activityIsLoaded,
      activityId,
      groups,
    } = this.props;

    const classes = function createClasses(match, isLoading) {
      return clsx(
        match && 'is-active',
        isLoading && 'is-loading'
      )
    }

    return (
      <div className="navbar-left">
        <aside className="menu">
          <ul className="menu-list">
            { activityIsLoaded &&
              <React.Fragment>
              {groups.allIds.map((groupSlug, index) => {
                return (
                  <Route
                    key={index}
                    path={`/app/a/${activityId}/g/${groupSlug}`}
                    children={({ match }) => (
                      <li
                        ref={this.refs[groupSlug]}
                      >
                        <Link
                          to={`/app/a/${activityId}/g/${groupSlug}`}
                          className={`group-link ${classes(match, groups.byId[groupSlug].isLoading)}`}
                        >
                          <div className="group-loader">
                            <div className="group-loader-border"></div>
                            <div className="group-loader-content"></div>
                          </div>
                          <div className="group-link-text">{groups.byId[groupSlug].name}</div>
                        </Link>
                      </li>
                    )}
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
