import { gql } from 'apollo-server-express';

export default gql `

extend type Query {

user(id: ID!):User

users: [User!]!

}

input UserInput {
  name: String
  userName: String
  email: String
  password: String
 }

extend type Mutation{
    signUp(email: String!, userName: String!, name: String!, password:String):User

    updateUser(id:ID! , input:UserInput): User

    deleteUser(id:ID!): User

}

type User {
id: ID!,
email: String!,
userName: String!,
name: String!,
createdAt: String!

}


`