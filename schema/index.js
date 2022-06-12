require('colors');
require('event-target-polyfill');
const { createPubSub } = require('@graphql-yoga/node')
const pubsub = createPubSub();

const userList = [{ id: "1", name: "LaskarKS", email: "laskar@gmail.com" }]

const typeDefs = `
   type User {
      id: ID
      name: String
      email: String
   }

   type Query {
      users: [User]
   }


`

const resolvers = {
   Query: {
      users: async (parent, args) => {
         return userList
      }
   }
};


module.exports = { typeDefs, resolvers }