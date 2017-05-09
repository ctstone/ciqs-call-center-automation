module.exports = (context, req) => {
  context.log(JSON.stringify(req));

  context.res = {
    body: {foo:'bar'}
  };
};
