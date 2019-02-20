import React from 'react';
import styles from '../styles/CurrentRoom.css';

const CurrentRoom = (props) => {
  return(
    <div classname={ styles.container }>
      <ul className={ styles.entries }>
        { props.messages.map((el, index) => <div className={ styles.entry }> 
                                              <div className={ styles.chtr }
                                                   key={ el.id }>{ el.chtr }</div>
                                              <div className={ styles.dateTimePosted }
                                                   key={ el.id }>{ el.dateTimePosted }</div>
                                              <div className={ styles.message }
                                                   key={ el.id }>{ el.message }</div>
                                            </div>) }
      </ul>
    </div>
  )
}

export default CurrentRoom;