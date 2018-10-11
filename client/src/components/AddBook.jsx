import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import { getAuthorsQuery, addBookMutation } from '../queries/queries'

class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    authorId: ''
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitForm = e => {
    e.preventDefault()
    const { name, genre, authorId } = this.state
    const newBook = {
      name,
      genre,
      authorId
    }

    console.log(newBook)
  }

  displayAuthors = () => {
    let data = this.props.getAuthorsQuery
    if (data.loading) {
      return <option>Loading authors</option>
    } else {
      return data.authors.map(author => (
        <option key={author.id}>{author.name}</option>
      ))
    }
  }

  render() {
    let options = <option>Loading authors</option>
    let data = this.props.data
    // if data is not loading return array of authrs
    if (!data.loading) {
      options = data.authors.map(author => (
        <option key={author.id}>{author.name}</option>
      ))
    }

    return (
      <form id="add-book" onSubmit={this.onSubmitForm}>
        <div className="field">
          <label htmlFor="Book">Book name</label>
          <input type="text" name="name" onChange={this.onInputChange} />
        </div>

        <div className="field">
          <label htmlFor="Genre">Genre: </label>
          <input type="text" name="genre" onChange={this.onInputChange} />
        </div>

        <div className="field">
          <label htmlFor="Author">Author: </label>
          <select name="authorId" onChange={this.onInputChange}>
            <option>Select author</option>
            {options}
          </select>
        </div>

        <button type="submit">+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook)
