const { buildSchema } = require('graphql');

// Define your schema using the GraphQL schema language
const schema = buildSchema(`
   type Employee {
    id: ID!
    name: String!
    department: String!
    email: String!
    phone: String!
  }

  type Query {
    employees: [Employee],
    employee(id: ID!): Employee
  }
`);

module.exports = schema;
