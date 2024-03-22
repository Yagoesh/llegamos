class HTTPError extends Error {
  constructor ( statusCode = 500, message="error no definido"){super(message)
  this.statusCode=statusCode}
}
module.exports= HTTPError