import React, { Component } from 'react';

export default class PrettyPrintJson extends Component {
    render() {
         const { data } = this.props;
         return (<div style={{width: "100%", display: "block", marginBottom: "10px"}}><pre>{JSON.stringify(data, null, 2) }</pre></div>);
    }
}
