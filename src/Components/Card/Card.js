import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.english}</div>
            </div>
            <div className="back">
                <div className="hanzi">{props.hanzi}</div>
                <div className="pinyin">{props.pinyin}</div>
            </div>
        </div>
    </div>
)

export default Card;