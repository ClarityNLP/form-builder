const fs = require('fs');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

module.exports = {

  getResults: async function(req,res) {

    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))

    await wait(2000);

    let results = JSON.parse(fs.readFileSync('data/results.json'));

    return res.send(results);

  },

  getResultsPost: async function(req,res) {

    const nlpql = req.param('nlpql');
    const formSlug = req.param('formSlug');

    function duplicateElements(array, times) {
      return array.reduce((res, current) => {
          return res.concat(Array(times).fill(current));
      }, []);
    }

    const fakeResult = {
      "_id": "5d28a07f41cfe7b7c2655667",
       "batch": 0,
       "concept_code": "",
       "concept_code_system": "",
       "display_name": "hypotension_requiring_therapy_unstructured",
       "end": 34,
       "experiencer": "Patient",
       "inserted_date": "2019-07-12 15:00:15.723000",
       "job_id": 2176,
       "negation": "Affirmed",
       "nlpaas_report_list_id": "130",
       "nlpql_feature": "hypotension_requiring_therapy_unstructured",
       "original_report_id": "1111306",
       "owner": "claritynlp",
       "phenotype_final": true,
       "pipeline_id": 3965,
       "pipeline_type": "ProviderAssertion",
       "report_date": "2155-02-15T17:14:00Z",
       "report_id": "bbfb1228-a4b5-11e9-b70e-028ff4dfb05e_130",
       "report_text": `[**3103-12-12**] 5:14 PM\n CHEST (PORTABLE AP); -77 BY DIFFERENT PHYSICIAN                 [**Name Initial (PRE) 72**] # [**Clip Number (Radiology) 39734**]\n Reason: evaluate for acute process\n Admitting Diagnosis: ALTERED MENTAL STATUS\n ______________________________________________________________________________\n UNDERLYING MEDICAL CONDITION:\n  45 M with CML now with ${nlpql}\n REASON FOR THIS EXAMINATION:\n  evaluate for acute process\n ______________________________________________________________________________\n                                 FINAL REPORT\n CHEST\n\n HISTORY:  ${nlpql}, CML.\n\n One portable supine view.  Comparison with [**3103-12-12**].  Atelectasis\n and/or consolidation at the left base and bilateral pleural effusions persist.\n Lung volumes are slightly lower than on the previous study.  The heart and\n mediastinal structures are unchanged.  An endotracheal tube remains in place.\n What appears to be a right PICC line terminates at the level of the right\n subclavian vein as demonstrated previously.\n\n IMPRESSION:  Allowing for differences in technique, no significant change.\n\n\n\n`,
       "report_type": "Radiology Note",
       "result_display": {
           "date": "2155-02-15T17:14:00Z",
           "highlights": [
               nlpql
           ],
           "result_content": `45 M with CML now with ${nlpql} REASON FOR THIS`,
           "sentence": ""
       },
       "section": "CONDITION",
       "sentence": "45 M with CML now with hypotension REASON FOR THIS",
       "solr_id": "bbfb1228-a4b5-11e9-b70e-028ff4dfb05e_130",
       "source": "bbfb1228-a4b5-11e9-b70e-028ff4dfb05e",
       "start": 23,
       "subject": "23907",
       "temporality": "Recent",
       "term": "hypotension",
       "value": true
    };

    const fakeResults = duplicateElements([fakeResult], 3);

    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))

    await wait(3000);

    // let results = JSON.parse(fs.readFileSync('data/results.json'));

    return res.send(fakeResults);
    // return res.serverError();

  }
}
