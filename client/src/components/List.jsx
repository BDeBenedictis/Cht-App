import React from 'react';
import styles from '../styles/Lists.css';

const List = (props) => {
  return(
    <div className={ styles.container }>
      <ul className={ styles.list }>
        { props.list.map((el, index) => <div className={ styles.option }
                                             key={ index }
                                             onChange={ (e) => props.handleInput('select', 'room', e) }>{ el }</div>) }
      </ul>
    </div>
  )
}

export default List;