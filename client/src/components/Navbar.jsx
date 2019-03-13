import React from 'react';
import styles from '../styles/Navbar.css';
// import { parseTimestamp } from '../socketAPI';

const Navbar = (props) => {
  return(
    <div className={ styles.container } >
      <div className={ styles.profileInfo } >
        <div className={ styles.signedIn } >Signed-In as: </div>
        {/* <img className={ styles.profilePic } src='https://i.ibb.co/zb6xW5r/BHHS-Photo-w-gt-2-MB.jpg' />   */}
        { props.chtr.map((el) => <div className={ styles.profileName } >{ el.name }</div> ) }
      </div>
      <div className={ styles.roomInfo } >
        <div className={ styles.occupying } >Currently in Room: </div>
        { props.room.map((el) => <div className={ styles.room } >{ el.roomname }</div> ) }
        {/* <div className={ styles.timestamp } >for { parseTimestamp(props.signInTimestamp, props.timestamp) } mins</div> */}
      </div>
      <div className={ styles.controls } >
        {/* <div className={ styles.settings } 
            onClick={ (e) => props.handleInputs(e) } >Settings</div> */}
        <div className={ styles.signOut } 
            onCLick={ (e) => props.handleInputs(e) } >Sign Out</div>
      </div>
    </div>
  )
}

export default Navbar;