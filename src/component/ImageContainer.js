import React, { Component } from 'react'
import Header from "./Header"
import ImageSquare from "./ImageSquare"
import people from "../people.json"


class ImageContainer extends Component {
state = {
  people
}

  removeImage = id => {
    const people = this.state.people.map(element => element.id !== id)

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