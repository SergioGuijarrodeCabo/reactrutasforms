import React, { Component } from 'react'
import img from './../assets/images/musica.jpg'

export default class Musica extends Component {
  render() {
    return (
      <div> <h1>Música</h1>
      <img src={img} />

      </div>
    )
  }
}
