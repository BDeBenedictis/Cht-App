import React from 'react';
import styles from '../styles/Lists.css';

const List = (props) => {
  return(
    <div className={ styles.container } >
      <div className={ styles.listTitle } >{ props.listTitle }</div>
      <ul className={ styles.list } >
        { props.list.map((el, index) => <form className={ props.room !== el ? styles.option : styles.selectedOption || props.dmchtr === el ? styles.option : styles.selectedOption }
                                            key={ index }
                                            name={ props.stateName }
                                            value={ el.id }
                                            onClick={ (e) => props.handleInputs('select', e) } >{ el.name }</form>) }
      </ul>
    </div>
  )
}

export default List;