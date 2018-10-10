import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './App.css'

// components
import BookList from './components/BookList'

// apollo client setup
const client = new ApolloClient({})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
