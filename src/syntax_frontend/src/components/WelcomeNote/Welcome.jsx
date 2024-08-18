import React from 'react'
import styles from './welcome.module.css'

function Welcome() {
  return (
    <div className={styles.welcome_note}>
        <h1>Welcome!</h1>
       <p>Correct your grammatical errors here</p> 
    </div>
  )
}

export default Welcome