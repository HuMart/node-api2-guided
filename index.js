const server = require('./api/server.js');
// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});


// create a server.js file somewhere
// move everything but serve.listen() out of index
// require the server from index.js
// module.exports the server from server.js
// update the path to acommodate the changes (hubs-model.js)