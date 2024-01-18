// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    height: Int
    apeindex: Int
    home: String
    savedClimbs: [Climb]!
  }

  type Climb {
    _id: ID!
    date: Date
    name: String!
    grade: String!
    location: String!
    beta: String!
    userId: User
  }

  input ClimbInput {
    date: Date
    name: String!
    grade: String!
    location: String!
    beta: String!
  }

  type Query {
    me(userId: ID!): User
    climb(climbId: ID!): Climb
    climbs: [Climbs]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addClimb(input: ClimbInput): Climb
    removeClimb(climbId: ID!): User
    removeAllClimbs(userId: ID!): User
    updateClimb(climbId: ID!, input: ClimbInput): Climb
  }
`;

// export the typeDefs
module.exports = typeDefs;
