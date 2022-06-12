require('colors');
const { createServer } = require('@graphql-yoga/node');
require('event-target-polyfill');

const { typeDefs, resolvers } = require('./schema');

const server = createServer({ schema: { typeDefs, resolvers } });

server.start(() => console.log('Server is running on Port 4000'.cyan.underline.bold));



