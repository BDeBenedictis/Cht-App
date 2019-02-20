import React from 'react';
import styles from '../styles/Navbar.css';

const Navbar = (props) => {
  return(
    <div className={ styles.container } >
      <div className={ styles.profileInfo } >
        <div className={ styles.profilePic } >{ props.chtr.picture }</div>
        <div className={ styles.profileName } >{ props.chtr.name }</div>
        <div className={ styles.room } >{ props.room }</div>
      </div>
      <div className={ styles.settings } >Settings</div>
      <div className={ styles.signOut } >Sign Out</div>
    </div>
  )
}

export default Navbar;