import React from 'react'
import banner from '../assets/banner.svg'
import shield from '../assets/shield-tick.svg'
import styles from '../index.module.css'
import { Link } from 'react-router-dom'

function Identity_2() {
  return (
    <section className={styles.home_container}>
      <div className={styles.container}>
        <div className={styles.banner} >
            <img src={banner}  alt="syntax_banner" className={styles.banner_img} />
       
        </div>
        <div className={styles.shield} >
          <img src={shield} alt="" className={styles.banner_img}/>
          <span>Signed in </span>
          <span>Succesfully</span>
         <Link to="/grammar"><button>Proceed</button></Link>
        </div>
        </div>
    </section>
  )
}

export default Identity_2