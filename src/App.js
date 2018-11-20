import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Button from './Components/Button/Button';
import Firebase from './Firebase/firebase_config';

class App extends Component {
  constructor(props) {
    super(props)

    //firebase connection 
    this.database = Firebase.database().ref().child('cards');
    
    this.newCard = this.newCard.bind(this);

    this.state ={
      cards: [],
      currentCard: {
        english: 'Yo',
        hanzi: 'Yooo',
        pinyin: 'Yoooo',
      }
    };
  }

  componentWillMount() {
    const currentCard = this.state.cards;
    
    this.database.on('child_added', snap => {
      currentCard.push({
        english: snap.val().eng,
        hanzi: snap.val().han,
        pinyin: snap.val().pin
      });
      this.setState({
        cards: currentCard,
        currentCard: this.randomCard(currentCard)
      });
    });

    // this.database.once('value').then((snapshot) => {
    //   console.log(snapshot.val());
    //   this.setState({
    //     cards: snapshot.val()
    //   });
    // });

    // console.log("current card: " + currentCard);
  }

  randomCard(currentCard) {
    let card = currentCard[Math.floor(Math.random() * currentCard.length)];
    return card;
  }

  newCard() {
    const currentCard = this.state.cards;

    this.setState({
      currentCard: this.randomCard(currentCard)
    });
  }
  
  render() {
    return (
     <div className="App">
       <Card 
        english={this.state.currentCard.english}
        hanzi={this.state.currentCard.hanzi}
        pinyin={this.state.currentCard.pinyin}
        />
        <Button handleButtonClick={this.newCard}/>
     </div>

    );
  }
}

export default App;
