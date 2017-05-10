const request = require('./request');

module.exports = function(context, req, res) {
  const siteHostName = req.body.siteHostName;
  request.get(`https://${siteHostName}/api/calls`, (err, res) => {
    context.done();
  });
};
