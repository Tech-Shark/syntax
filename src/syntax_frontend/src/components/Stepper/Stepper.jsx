import React from 'react'
import styles from '../../views/NewProject/new-project.module.css'
import data from '../../data/stepper.json'

function Stepper() {
  return (
    <div className={styles.stepper_container}>
    {data.map((data) => (
      <div className={styles.stepper}>
        <div >{data.step}</div>
        <div className={styles.stepper_title}>
          <h3>{data.heading}</h3>
          <p>{data.details}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Stepper