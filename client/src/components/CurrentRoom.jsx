import React from 'react';
import styles from '../styles/CurrentRoom.css';

const CurrentRoom = (props) => {
  return(
    <div classname={ styles.container } >
      <ul className={ styles.entries } >
        { props.messages.map((el, index) => el.postedBy !== props.chtr[0].name ?  <div className={ styles.entry } > 
                                                                            <div className={ styles.chtr }
                                                                                key={ index } >{ el.postedBy }</div>
                                                                            <div className={ styles.dateTimePosted }
                                                                                key={ index } >- posted @ { el.postedAt }: </div>
                                                                            <div className={ styles.message }
                                                                                key={ index } >{ el.content }</div>
                                                                          </div> 
                                                                        : 
                                                                          <div className={ styles.selfEntry } > 
                                                                            <div className={ styles.selfChtr }
                                                                                key={ index } >{ el.postedBy }</div>
                                                                                <br/>
                                                                            <div className={ styles.dateTimePosted }
                                                                                key={ index } >- posted @ { el.postedAt }: </div>
                                                                            <div className={ styles.message }
                                                                                key={ index } >{ el.content }</div>
                                                                          </div> 
  )}
      </ul>
    </div>
  )
}

export default CurrentRoom;