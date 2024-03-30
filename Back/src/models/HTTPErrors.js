class HTTPError extends Error {
  constructor ( statusCode = 500, message="error not defined"){super(message)
  this.statusCode=statusCode}
}
module.exports= HTTPError