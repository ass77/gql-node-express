var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    message: String,
    no: Int
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  message: () => {
    return 'Hello world!';
  },
  no: () => {
    return 42;
  },
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4001);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
