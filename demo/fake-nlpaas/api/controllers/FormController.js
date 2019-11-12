const fs = require('fs');

module.exports = {

  getForms: async function(req,res) {

    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))

    await wait(1000);

    let forms = JSON.parse(fs.readFileSync('data/forms.json'));

    return res.send(forms);
  },

  getForm: async function(req,res) {

    const slug = req.param('formSlug');

    const wait = ms => new Promise((r, j)=>setTimeout(r, ms))

    await wait(1000);

    try {
      let form = JSON.parse(fs.readFileSync(`data/form_${slug}.json`));
      return res.send(form);
    } catch (e) {
      return res.serverError(e);
    }
  },
}
