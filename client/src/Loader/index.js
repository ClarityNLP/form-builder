import React, { Component } from "react";

export default class Loader extends Component {
    render() {
        return (
            <div className="loader d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}
