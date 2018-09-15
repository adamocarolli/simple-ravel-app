const Ravel = require('ravel');
const app = new Ravel();

// parameters like this can be supplied via a .ravelrc.json file
app.set('keygrip keys', ['mysecret', 'anothersecret']);

app.scan('./modules'); //import all Modules from a directory
app.scan('./routes');  //import all Routes from a file

(async () => {
  // you'll register managed parameters, and connect Modules, Resources and Routes here
  await app.init();
  // you'll set managed parameters here
  // ...
  // then start the server
  await app.listen();
})();