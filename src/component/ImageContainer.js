import React, { Component } from 'react'
import Header from "./Header"
import ImageSquare from "./ImageSquare"
import People from "../people.json"


class ImageContainer extends Component {
state = {
  people: People,
  clicked: [],
  // initialPeople: people,
  // initialClicked: []
};

  removeImage = (id, name, initialState) => {
      let checkImage = this.state.clicked.includes(name)
    if (this.state.people.length <= 10) {
      alert("Congrats, you won this game...yay... *insert sarcasm* ");
      this.setState({
        people: People,
        initialClicked: []
      });
    }
      else {
      if (checkImage) {
        alert("YOU loose!")
        this.setState({
          people: People,
          clicked: []
        })
      } else {
        const removedPeople = this.state.people.filter(element => element.id !== id)
        const clickedArry = this.state.clicked.slice()
        clickedArry.push(name)
        this.setState({
          people: removedPeople,
          clicked: clickedArry
        });
      }
  }
  }
  
  // shuffleArry = people => {
  //   let rand, arry1
  //   for (let i = people.length; i > 0; i--) {
  //     rand = Math.floor(Math.random() * i + 1)
  //     arry1 = people[i]
  //     people[i] = people[rand]
  //     people[rand] = arry1
  //   } return people
  // }

  render() {
    return (
      <div>
        
        <Header />
        {/* {this.shuffleArry(this.state.people)} */}
        {this.state.people.map(person => (
          <ImageSquare 
            check = {this.checkImage}
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