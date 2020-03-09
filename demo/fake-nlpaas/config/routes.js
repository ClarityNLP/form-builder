/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  // 'get /4100r4/:nlpql': 'EvidenceController.getResults',
  // 'post /4100r4/:nlpql': 'EvidenceController.getResultsPost',
  'post /job/NLPQL_form_content/:formSlug/:evidenceSlug': 'EvidenceController.getResultsPost',
  // 'get /forms/:slug': 'FormController.getForm',
  'get /form/NLPQL_form_content/:formSlug/questions': 'FormController.getForm',
  'get /forms': 'FormController.getForms',
  'post /report/upload': 'EvidenceController.getSourceId'
};
