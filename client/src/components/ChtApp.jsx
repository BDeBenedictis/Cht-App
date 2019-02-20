import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import List from './List.jsx';
import CurrentRoom from './CurrentRoom.jsx';
import MessageInput from './MessageInput.jsx';
import styles from '../styles/ChtApp.css';

class ChtApp extends Component {
  constructor() {
    super();
    this.state = {
      chtrs: [],
      rooms: [],
      messages:[],
      chtr: {},
      room: '',
      message: ''
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(inputType, inputDestination, e) {
    if (inputType === 'toggle') {
      this.setState({ inputDestination: !inputDestination });
    } else if (inputType === 'select') {
      this.setState({ inputDestination: e.target.value });
    } else if (inputType === 'typing') {
      this.setState({ inputDestination: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();


  }

  render() {
    return(
      <div className={ styles.wrapper } >
        <div className={ styles.title } >Cht</div>
        <div className={ styles.navbarLayout } >
          <Navbar chtr={ this.state.chtr } 
                  room={ this.state.room } />
        </div>
        <div className={ styles.listsLayout } >
          <List handleInput={ this.handleInput }
                list={ this.state.chtrs } />
          <List handleInput={ this.handleInput } 
                list={ this.state.rooms } />
        </div>
        <div className={ styles.roomLayout } >
          <CurrentRoom room={ this.state.room }
                       messages={ this.state.messages } />
          <div className={ styles.inputLayout } >
            <MessageInput handleInput={ this.handleInput }
                          message={ this.state.message } />
          </div>
        </div>
      </div>
    )
  }
}

export default ChtApp;