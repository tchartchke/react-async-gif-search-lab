import React, { Component } from 'react'

export default class GifList extends Component {
  items() {
    return this.props.gifs.map(elem => <li><img src={elem}/></li>)
  }

  render () {
    return (
    <ul>
      {this.items()}
    </ul>)
  }
}