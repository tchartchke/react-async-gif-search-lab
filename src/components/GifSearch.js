import React, { Component } from 'react'

export default class GifSearch extends Component {
  render () {
    return (
      <form>
        Enter a Search Terms:
        <input onChange={event => this.props.handleChange(event)}
            value={this.props.search}
            name="search" type="text"/>
        <input onClick={event => this.props.handleSubmit(event)}
            name="submit" type="submit"/>
      </form>
      )
  }
}