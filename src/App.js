import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Button from './Components/Button/Button';
import { firebase_config } from './Firebase';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props)

    //firebase connection 
    this.app = firebase.initializeApp(firebase_config);
    this.database = this.app.database().ref().child('cards');
    
    this.newCard = this.newCard.bind(this);


    this.state ={
      cards: [
        {
          english: 'To Be',
          hanzi: '是',
          pinyin: 'shi'
        },
        {
          english: 'Man',
          hanzi: '人',
          pinyin: 'ren'
        },
      ],
      currentCard: {}
    };
  }

  componentWillMount() {
    const currentCard = this.state.cards;
    
    this.setState({
      cards: currentCard,
      currentCard: this.randomCard(currentCard)
    });
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
