import { gql } from '@apollo/client';
export const GET_ME = gql`

query Query {
    me {
      username
      email
      bookCount
      _id
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }`
  