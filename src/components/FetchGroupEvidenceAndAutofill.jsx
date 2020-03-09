import React, { Component } from "react";

class FetchGroupEvidenceAndAutofill extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    return this.props.fetchGroupEvidenceAndAutofill(this.props.groupSlug);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.groupSlug !== prevProps.groupSlug) { //P.O.B: This is beautiful.
      return this.props.fetchGroupEvidenceAndAutofill(this.props.groupSlug);
    }
  }

  render() {
    return null;
  }
}

export default FetchGroupEvidenceAndAutofill;
