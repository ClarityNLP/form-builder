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

  'get /4100r4/:nlpql': 'EvidenceController.getResults',
  'post /4100r4/:nlpql': 'EvidenceController.getResultsPost',
  'get /forms/:slug': 'FormController.getForm',
  'get /forms': 'FormController.getForms'
};
