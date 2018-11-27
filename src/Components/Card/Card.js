import React, { Component } from 'react';
import './Card.css';


//https://www.w3schools.com/howto/howto_css_flip_card.asp
const Card = (props) => (
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="english">{props.english}</div>
            </div>
            <div className="flip-card-back">
                <div className="hanzi">{props.hanzi}</div>
                <div className="pinyin">{props.pinyin}</div>
            </div>
        </div>
    </div>
)

export default Card;