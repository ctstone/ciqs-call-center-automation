const https = require('https');
const url = require('url');

function req(options, callback) {
  return https.request(options, (res) => {
    const chunks = [];
    res.on('data', (chunk) => chunks.push(chunk));
    res.on('end', () => callback(null, {
      statusCode: res.statusCode,
      headers: res.headers,
      body: Buffer.concat(chunks).toString('utf8'),
    }));
  }).on('error', (err) => {
    callback(err, null);
  });
};

function request(uri, body, optionsOrCallback, callback) {
  const [options, cb] = getOptionsOrCallback(optionsOrCallback, callback);
  Object.assign(options, parseUri(uri));
  const r = req(options, callback);
  if (body !== null && body !== undefined) {
    r.write(body);
  }
  r.end();
  return r;
}

module.exports = request;

const NO_BODY_METHODS = ['get', 'delete'];
const BODY_METHODS = ['post', 'put', 'patch'];

NO_BODY_METHODS.forEach((method) => {
  request[method] = (uri, optionsOrCallback, callback) => {
    const [options, cb] = getOptionsOrCallback(optionsOrCallback, callback);
    Object.assign(options, {method});
    return request(uri, null, options, cb);
  };
});

BODY_METHODS.forEach((method) => {
  request[method] = (uri, body, optionsOrCallback, callback) => {
    const [options, cb] = getOptionsOrCallback(optionsOrCallback, callback);
    Object.assign(options, {method});
    return request(uri, body, options, cb);
  };
});

function parseUri(uri) {
  if (typeof uri === 'object') {
    return uri;
  } else {
    return url.parse(uri, true);
  }
}

function getOptionsOrCallback(optionsOrCallback, callback) {
  let options;
  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  } else {
    options = optionsOrCallback;
  }
  return [options, callback];
}