const typeDefs = `
    type Auth {
        token: ID!
        user: User
    } 

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        me: User
        users: [User]
    }

    input SaveBook {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(saveBook: SaveBook): User
        removeBook(bookId: ID): User
    }
`;

module.exports = typeDefs;
