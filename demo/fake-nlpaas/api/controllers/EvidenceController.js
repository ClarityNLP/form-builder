const fs = require('fs');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

module.exports = {

  getSourceId: async function(req,res) {

    // doing nothing with *docs* key in payload...

    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))

    await wait(10);

    return res.send({
      source_id: 5
    });
  },

  getResults: async function(req,res) {

    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))

    await wait(10);

    let results = JSON.parse(fs.readFileSync('data/results.json'));

    // let results = [];

    return res.send(results);

  },

  getResultsPost: async function(req,res) {
    const evidenceSlug = req.param('evidenceSlug');
    const formSlug = req.param('formSlug');
    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))
    const path = `data/evidences/${evidenceSlug}.json`;

    try {
      if (fs.existsSync(path)) {
        const results = JSON.parse(fs.readFileSync(path));
        //OPTIONAL WAIT
        await wait(10);
        return res.send(results);
      } else {
        return res.send([]);
      }
    } catch(err) {
      return res.badRequest(err);
    }
  }
}
