import { gql } from 'apollo-boost'

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

export const addBookMutation = gql`
  mutation {
    addBook(book: "", genre: "", authorId: "")
  }
`
