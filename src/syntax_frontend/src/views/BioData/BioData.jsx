import React from 'react'
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import Welcome from '../../components/WelcomeNote/Welcome'
import styles from './biodata.module.css'

function BioData() {
    
  return (
    <div className={styles.main_container}>
        <Sidebar />
        <Header />
        <section className={styles.main_section} >
            <div className={styles.welcome}>
            <Welcome />
            </div>
            
            <section className={styles.form_section}>
            <header>BioData</header>
            <form action="">
               <div className={styles.column}>
               <div className={styles.input_box}>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter your first name' />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter your last name' />
                </div>
               </div>
               <div className={styles.column}>
               <div className={styles.input_box}>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='Enter your phone number' />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="">Email Address</label>
                    <input type="email" placeholder='samuel@example.com' />
                </div>
               </div>

               <div className={styles.home_input}>
                    <label htmlFor="">Home Address</label>
                    <input type="text" placeholder='Enter address here' />
                </div>
                <div className={styles.button_box}>
                <button>Next Step</button>
                </div>
            </form>
        </section>
        </section>
        
                
    </div>
  )
}

export default BioData