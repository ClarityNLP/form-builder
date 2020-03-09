import React, { Component } from "react";
import EvidenceFilter from './EvidenceFilter';
import EvidenceModal from './EvidenceModal';
import EvidenceList from '../containers/evidence_list_container.js';
import { Route } from 'react-router-dom';
import BouncingBalls from './BouncingBalls';

class EvidenceSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activityIsLoaded } = this.props;

    return (
      <div className="evidence-panel">
        <EvidenceFilter/>
        { !activityIsLoaded ? (
          <div className="is-loading">{/* TODO: make a skeleton when have time... */}
            <BouncingBalls/>
          </div>
        ) : (
          <Route
            path={`/app/a/:activityId/g/:groupSlug/q/:questionSlug`}
            component={EvidenceList}
          />
        )}

        <EvidenceModal/>
      </div>
    )
  }
}

export default EvidenceSidebar;
