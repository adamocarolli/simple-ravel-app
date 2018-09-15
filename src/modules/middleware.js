const Ravel = require('ravel');
const Module = Ravel.Module;
const middleware = Module.middleware;

class MyMiddleware {
  // this middleware will be available by name elsewhere in the application
  @middleware('custom-middleware')
  async doSomething(ctx, next) {
    // ... do something before the next middleware runs
    await next();
    // ... do something after the next middlware runs
  }
}