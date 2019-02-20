import React from 'react';
import styles from '../styles/Inputs.css';

const MessageInput = (props) => {
  return(
    <div className={ styles.container }>
      <form>
        <div className={ styles.giphyOptions }>{  }</div>
        <input className={ styles.input }
               placeholder="Enter your message..." 
               size="25"
               onChange={ (e) => props.handleInput('typing', 'message', e) }></input>
        <button type="submit"
                className={ styles.submit }
                onClick={ (e) => props.handleSubmit(e) }>Send</button>
      </form>
    </div>
  )
}

export default MessageInput;