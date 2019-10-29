import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

export default class NavbarLeft extends Component {

  constructor(props) {
    super(props);
  }

  keyPressed = (event) => {
    console.log('keypressed props: ',this.props);
    if (event.keyCode === 37) { // left arrow
      const currentGroupIndex = this.props.form.groups.findIndex(group => slugify(group) === this.props.pathname.substr(this.props.pathname.lastIndexOf('/') + 1));
      if (currentGroupIndex > 0) {
        this.props.push(slugify(this.props.form.groups[currentGroupIndex - 1]));
      }
    }
    if (event.keyCode === 39) { // right arrow
      const currentGroupIndex = this.props.form.groups.findIndex(group => slugify(group) === this.props.pathname.substr(this.props.pathname.lastIndexOf('/') + 1));
      if (currentGroupIndex < this.props.form.groups.length - 1) {
        this.props.push(slugify(this.props.form.groups[currentGroupIndex + 1]));
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    const { groups } = this.props.form;
    const { pathname } = this.props;

    return (
      <div className="navbar-left">
        <aside className="menu">
          <ul className="menu-list">
            {groups.map((group, index) => {
              return <li key={index}>
                       <Link
                         to={`/${slugify(group)}`}
                         className={`group-link ${slugify(group) === pathname.substr(pathname.lastIndexOf('/') + 1) ? 'is-active' : ''}`}
                       >
                         {group}
                       </Link>
                     </li>
            })}
          </ul>
        </aside>
      </div>
    )
  }
}
