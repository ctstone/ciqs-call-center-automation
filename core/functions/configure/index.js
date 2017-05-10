const request = require('request');

module.exports = function(context, req, res) {
  const configUrl = `https://${req.body.siteHostName}/api/configure`;
  context.log(`Configuring site using URL ${configUrl}`)
  request.get(configUrl, (err, resp, body) => {

    if (err) {
      context.log.error(err.message);
      context.done(err);
    } else if (resp.statusCode === 200) {
      context.log('Site configured successfully');
      context.done();
    } else {
      context.log.error(`Configuration request returned HTTP ${resp.statusCode}: ${body}`);
      context.done(new Error('Services could not be configured'));
    }

  });
};
