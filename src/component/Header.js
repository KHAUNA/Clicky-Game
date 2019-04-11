import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">CLICKY GAME</h4>
            <p>Click each image, but only click it once!</p>
        </div>
      </div>
    )
  }
}
