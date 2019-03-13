import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');
import axios from 'axios';
import Navbar from './Navbar.jsx';
import List from './List.jsx';
import CurrentRoom from './CurrentRoom.jsx';
import MessageInput from './MessageInput.jsx';
import styles from '../styles/ChtApp.css';

class ChtApp extends Component {
  constructor() {
    super();
    this.state = {
      chtrs: [{ id: 1, name: 'Admin' }, { id: 2, name: 'Somebody' }, { id: 3, name: 'Else' }, { id: 4, name: 'As' }, { id: 5, name: 'Well' }],
      rooms: [{ id: 1, name: 'General Lobby' }, { id: 2, name: 'Left' }, { id: 3, name: 'Right' }, { id: 4, roomname: 'Upside-down World' }],
      messages:[{ postedBy: 'Somebody', postedIn: 'General Lobby', postedAt: '06:11 PM', content: 'Hello' }, 
      { postedBy: 'Else', postedIn: 'General Lobby', postedAt: '06:34 PM', content: 'Hi' }, 
      { postedBy: 'As', postedIn: 'General Lobby', postedAt: '07:16 PM', content: 'Hey' }, 
      { postedBy: 'Admin', postedIn: 'General Lobby', postedAt: '10:42 PM', content: 'Work please, thank you.' },
      { postedBy: 'Well', postedIn: 'General Lobby', postedAt: '10:31 PM', content: 'Huh?'}], 
      
      chtr: [{ id: 1, name: 'Admin' }],
      room: [{ id: 1, roomname: 'General Lobby' }],
      
      messageContent: '',
      dmContent: '',

      signedIn: true,
      directMessage: false,
    };
  
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ComponentDidMount() {
    socket.on('connected', this.getLoggedIn);

    // VVV RESTful API VVV //

    //   axios.get('/api/room')
    //     .then((data) => {
    //       this.setState({ rooms: data.data });
    //     })
    //     .catch((err) => {
    //       console.error('There was an error fetching rooms list from controller: ', err);
    //     })
    // }
  }

  // getLoggedIn() {
  //   axios.get('/rooms')
  //     .then((data) => {
  //       this.setState({ chtr: data.chtr, rooms: data.rooms });
  //     })
  //     .catch((err) => {
  //       console.log('Error getting rooms list upon Log In: ', err);
  //     });
  // }

  
  getMessages() {
    // socket.on('connect', function() {
      
    // });
    axios.get(`/api/room/messages`)
    .then((data) => {
      this.setState({ messages: data.data });
    })
    .catch((err) => {
      console.error('There was an error fetching messages from controller: ', err);
    });
  }

  handleInputs(inputType, e) {
    e.preventDefault();

    if (inputType === 'toggle') {
      this.setState({ [e.target.name]: ![e.target.name] });
    } else if (inputType === 'select') {
      this.setState({ [e.target.getAttribute('name')]: e.target.getAttribute('value') });
      console.log('e.target.getAttribute(\'name\'): ', e.target.getAttribute('name'), 'e.target.getAttribute(\'value\'): ', e.target.getAttribute('value'));
    } else if (inputType === 'typing') {
      this.setState({ [e.target.name]: e.target.value });
      console.log('e.target.name: ', [e.target.name], 'e.target.value: ', e.target.value);
    }
  }
          
  handleSubmit(e) {
    e.preventDefault();
    
    // VVV socket.io VVV //
    
    if (this.state.messageContent.length > 0) {
      const message = {
        postedBy: this.state.chtr.map((el) => el.id)[0],
        postedIn: this.state.room.map((el) => el.id)[0],
        postedAt: new Date(),
        content: this.state.messageContent
      };
      
      socket.emit('chtMessage', message);
      console.log(message);
      
      socket.on('chtMessage', function(message){
        console.log('Trying to set messages state: ', message);
        // this.setState(prevState => ({ messages: [...prevState, message] }));
      });

      // this.getMessages();
      // console.log(this.state.messages);
    }

    // VVV RESFTful API VVV //

  //   if(this.state.message.length > 0) {
  //     let message = {
  //       chtr: this.state.chtr,
  //       content: this.state.message,
  //       room: this.state.room
  //     };

  //     axios.post(`/api/room/messages`, message)
  //       .then((data) => {
  //         this.fetchMessages();
  //       })
  //       .catch((err) => {
  //         console.error('There was an error sending the message data to the controller: ', err);
  //       })
    // }
  }

  // handleEdit() {

  // }

  // handleDelete(e) {



  // VVV RESTful API VVV //
  //   axios.delete(`api/room/messages`, {params: { id: e } })
  //     .then((data) => {
  //       console.log(data, 'was deleted.');
  //       this.fetchMessages();
  //     })
  //     .catch((err) => {
  //       console.error('There was an error sending the delete request to the controller: ', err);
  //     });
  // }

  render() {
    return(
      <div className={ styles.wrapper } >
        <div className={ styles.header } >
          <div className={ styles.title } >Chtr</div>
          <div className={ styles.navbarLayout } >
            <Navbar chtr={ this.state.chtr } 
                    room={ this.state.room }
                    signInTimestamp={ this.state.signInTimestamp }
                    timestamp={ this.state.timestamp }
                    handleInputs={ this.handleInputs }
                    className={ styles.item1 } />
          </div>
        </div>
        <div className={ styles.listsLayout } >
          <List handleInputs={ this.handleInputs }
                listTitle={ 'Chtrs: ' }
                stateName={ 'dmchtr' }
                // dmchtr={ this.state.dmchtr }
                list={ this.state.chtrs } 
                className={ styles.chtrsList } />
          <List handleInputs={ this.handleInputs } 
                listTitle={ 'Rooms: ' }
                stateName={ 'room' }
                // room={ this.state.room }
                list={ this.state.rooms }
                className={ styles.roomList } />
        </div>
        <div className={ styles.roomLayout } >
          <CurrentRoom room={ this.state.room }
                       chtr={ this.state.chtr }
                       messages={ this.state.messages }
                       className={ styles.currentRoom } />
          <div className={ styles.inputLayout } >
            <MessageInput handleInputs={ this.handleInputs }
                          handleSubmit={ this.handleSubmit }
                          sendMessage={ this.sendMessage }
                          message={ this.state.messageContent }
                          className={ styles.messageInput } />
          </div>
        </div>
      </div>
    )
  }
}

export default ChtApp;