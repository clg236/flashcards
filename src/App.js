
//our imports (Firebase, React, some CSS and our Card and Button Components)
import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Button from './Components/Button/Button';
//this is the configuration file we create from Firebase when 
//setting up our application
import Firebase from './Firebase/firebase_config';

class App extends Component {
  //call our constructor when we first instantiate the class
  //and pass it props
  constructor(props) {
    super(props)

    //the database method to get a reference
    //to the 'cards' child of our firebase database
    //see here:
    this.database = Firebase.database().ref().child('cards');
    
    this.newCard = this.newCard.bind(this);

    //our state object has two values, an array of cards
    //and a current card

    this.state ={
      cards: [],
      currentCard: {
        english: '',
        hanzi: '',
        pinyin: '',
      }
    };
  }
  //this is our component lifecycle method that is called
  //right before the App component will mount:

  componentWillMount() {
    //declare a const called currentCard and set it equal to
    //whatever our cards are
    const firebaseCards = this.state.cards;

    //database.on is called once, then every time we add a child
    //to the database. We only need it once
    //snap => is the callback that will contain the object rep'd
    //by whatever FB sends back
    this.database.on('child_added', snap => {
      //we simply want to push each child to the value to the current card const
      firebaseCards.push({
        english: snap.val().eng,
        hanzi: snap.val().han,
        pinyin: snap.val().pin
      });
      //now we can set our state! cards should now be equal to
      //our cards from the Firebase db
      this.setState({
        cards: firebaseCards,
        currentCard: this.randomCard(firebaseCards)
      });
    });
  }

  // a simple function to pick a random card, we've used this a lot
  randomCard(firebaseCards) {
    let card = firebaseCards[Math.floor(Math.random() * firebaseCards.length)];
    return card;
  }

  //we need a new card when we press the button
  newCard() {
    const firebaseCards = this.state.cards;

    this.setState({
      currentCard: this.randomCard(firebaseCards)
    });
  }
  
  render() {
    return (
     <div className="App">
     <div className="cardRow">
       <Card 
        english={this.state.currentCard.english}
        hanzi={this.state.currentCard.hanzi}
        pinyin={this.state.currentCard.pinyin}
        />
        </div>
        <div className="buttonRow">
        <Button handleButtonClick={this.newCard}/>
        </div>
     </div>

    );
  }
}

export default App;
