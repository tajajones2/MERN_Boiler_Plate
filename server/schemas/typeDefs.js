const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }
`
module.exports = typeDefs;