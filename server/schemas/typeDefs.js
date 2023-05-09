const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
}
type Book {
    _id: ID
    bookId: String
    image: String
    link: String
    title: String
    description: String
    authors: String
}
`

module.exports = typeDefs