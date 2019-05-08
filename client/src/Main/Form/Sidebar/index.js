import React, { Component } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

export default class SideBar extends Component {
  render() {
    const { groups, selectedGroup } = this.props;

    return (
      <div className='sidebar'>
        <ButtonGroup vertical>
          {groups.map(g => {
            return (
              <Button
                className={
                  g === selectedGroup ? 'active text-left' : 'text-left'
                }
                key={g}
              >
                {g}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    );
  }
}
