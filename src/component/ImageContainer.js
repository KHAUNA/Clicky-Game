import React, { Component } from 'react'
import Header from "./Header"
import ImageSquare from "./ImageSquare"
import people from "../people.json"

// var Shuffle = require('react-shuffle')


class ImageContainer extends Component {
state = {
  people
};
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

  shuffleArry = people => {
    let rand, arry1
    for (let i = people.length; i > 0; i--) {
      rand = Math.floor(Math.random() * i + 1)
      arry1 = people[i]
      people[i] = people[rand]
      people[rand] = arry1
    } return people
    
    
  }

  render() {
    return (
      <div>
        
        <Header />
        {/* {this.shuffleArry(this.state.people)} */}
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