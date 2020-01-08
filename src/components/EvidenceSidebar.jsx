import React, { Component } from "react";
import EvidenceFilter from './EvidenceFilter';
import EvidenceModal from './EvidenceModal';
import EvidenceList from '../containers/evidence_list_container.js';
import { Route } from 'react-router-dom';

class EvidenceSidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    const { formIsLoaded } = this.props;

    return (
      <div className="evidence-panel">
        <EvidenceFilter/>
        { !formIsLoaded ? (
          <div>SKELETON</div>
        ) : (
          <Route
            path={`/app/f/:formSlug/g/:groupSlug/q/:questionSlug`}
            component={EvidenceList}
          />
        )}

        <EvidenceModal/>
      </div>
    )
  }
}

export default EvidenceSidebar;
