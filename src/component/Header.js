import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">CLICKY GAME</h4>
            <p>Click each image, but only click it once!</p>
        </div>
      </div>
    )
  }
}
