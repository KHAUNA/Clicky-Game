import React, { Component } from 'react'
import Header from "./Header"
import ImageSquare from "./ImageSquare"
import people from "../people.json"


class ImageContainer extends Component {
state = {
  people
}
  // saveBaseState = () => {
  //   this.baseState = this.state
  // }
  // saveBaseState()

  // resetState = () => this.setState(this.baseState)
  //need condition to reset state

  removeImage = id => {
 
    const people = this.state.people.filter(element => element.id !== id)
    this.setState({people});

  }



  render() {
    return (
      <div>
        <Header />
        {this.state.people.map(person => (
          <ImageSquare 
            remove = {this.removeImage}
            id = {person.id}
            name = {person.name}
            image = {person.image}
          />
        ))}

          
      </div>
    )
  }
}

export default ImageContainer;