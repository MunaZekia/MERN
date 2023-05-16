import { gql } from '@apollo/client';
export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
        user {
          _id
          username
          }
    }
  }`
  export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`
export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $description: String, $bookId: String, $title: String, $image: String, $link: String) {
  saveBook(authors: $authors, description: $description, bookId: $bookId, title: $title, image: $image, link: $link) {
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
    _id
    email
    username
  }
}`
export const REMOVE_BOOK = gql`

mutation RemoveBook($bookId: String) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}`