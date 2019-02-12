import gql from 'graphql-tag'

export default gql`
  mutation signUp(
    $name: String!
    $userName: String!
    $email: String!
    $password: String
  ) {
    signUp(
        name: $name
        userName: $userName
        email: $email
        password: $password
    ) {
        name
        userName
        email
        createdAt
    }
  }
`