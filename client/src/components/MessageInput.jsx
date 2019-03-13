import React from 'react';
import styles from '../styles/Inputs.css';

const MessageInput = (props) => {
  return(
    <div className={ styles.container } >
      <form>
        <div className={ styles.giphyOptions } >{  }</div>
        <input className={ styles.input }
               placeholder="Enter your message..." 
               type="text"
               name="messageContent"
               onChange={ (e) => props.handleInputs('typing', e) } ></input>
        <button type="submit"
                className={ styles.submit }
                onClick={ (e) => props.handleSubmit(e) }
                >Send</button>
      </form>
    </div>
  )
}

export default MessageInput;