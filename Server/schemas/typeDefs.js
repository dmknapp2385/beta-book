// import the gql tagged template function
const { gql } = require("apollo-server-express");

//TODO: ADD A SEARCH QUERY
// create our typeDefs
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    first: String
    last: String
    username: String!
    email: String!
    height: Int
    apeindex: Int
    home: String
    climbs: [Climb]
  }

  type Climb {
    _id: ID!
    date: String
    name: String!
    grade: String!
    location: String!
    beta: String!
    userId: User
  }

  input ClimbInput {
    date: String
    name: String!
    grade: String!
    location: String!
    beta: String!
    userId: String
  }

  input UserInput {
    first: String
    last: String
    username: String
    email: String
    height: Int
    apeindex: Int
    home: String
  }

  type Query {
    me(userId: ID!): User
    users: [User]
    climb(climbId: ID!): Climb
    climbs: [Climb]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addClimb(input: ClimbInput): User
    removeClimb(climbId: ID!): User
    updateClimb(climbId: ID!, input: ClimbInput): Climb
    deleteUser(userId: ID!): [User]
    updateUser(input: UserInput): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
