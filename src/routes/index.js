const Ravel = require('ravel');
const Routes = Ravel.Routes;
const inject = Ravel.inject;
const before = Routes.before; // decorator to chain middleware before an endpoint
const mapping = Routes.mapping; // decorator to associate a handler method with an endpoint

@Routes('/') // base path for all routes in this class. Will be prepended to the @mapping.
class ExampleRoutes {
  constructor (middleware1) {
  // bind this method to an endpoint and verb with @mapping. This one will become GET /app
  @mapping(Routes.GET, 'app')
  @before('custom-middleware') // use @before to place multiple middleware (comma-separated names) before appHandler - these could be npm modules, functions on this scope, or defined via @middleware
  async appHandler (ctx) {
    // ctx is just a koa context! Have a look at the koa docs to see what methods and properties are available.
    ctx.body = '<!DOCTYPE html><html><body>Hello World!</body></html>';
    ctx.status = 200;
  }
}

// Export Routes class
module.exports = ExampleRoutes;