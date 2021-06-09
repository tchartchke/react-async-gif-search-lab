import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(){
    super();
    this.state = {
      gifs : [],
      search : ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log(event)
    this.fetchGifs(this.state.search)
  }


  fetchGifs = (query) => {
    let url = 'https://api.giphy.com/v1/gifs/trending?api_key=jpXZyPcj6r9yR3q66opINWG3LSuMPGR7&limit=3'
    if (query) {
      url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jpXZyPcj6r9yR3q66opINWG3LSuMPGR7&limit=3`
    }
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const gifs = [];
      data.data.forEach( gif => gifs.push(gif.images.original.url));
      this.setState({
        gifs: gifs
      })
    });
  }

  componentDidMount(){
    this.fetchGifs()
  }

  render () {
    return (
      <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}