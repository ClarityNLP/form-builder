import React, { Component } from 'react';
import Loader from '../../../Loader';
import Evidence from './Evidence';

export default class Question extends Component {
  render() {
    const { question, loading } = this.props;
    const { question_name, evidence_bundle } = question;

    return (
      <div className='question pt-4 text-center'>
        <div className='mb-4'>
          <h1>{question_name}</h1>
        </div>
        <div className='evidence'>
          {loading ? (
            <Loader />
          ) : (
            <Evidence evidence_bundle={evidence_bundle} />
          )}
        </div>
      </div>
    );
  }
}
