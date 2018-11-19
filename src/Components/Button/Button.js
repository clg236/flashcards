import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props){
        super(props)
    };

    newCard() {
        this.props.handleButtonClick();
    }
    
    render() { 
        return (  
            <div className="buttonContainer">
                <button className="btn" onClick={this.props.handleButtonClick}>New Card</button>
            </div>
        );
    }
}
 
export default Button;