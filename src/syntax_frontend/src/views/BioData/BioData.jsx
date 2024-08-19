import React from 'react'
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import Welcome from '../../components/WelcomeNote/Welcome'
import styles from './biodata.module.css'

function BioData() {
    
  return (
    <div className={styles.main_container}>
        {/* <Sidebar /> */}
        <Header />
        
        <section className={styles.main_body}>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Bio data</h1>    
                <form >
                    <div className={styles.main_user_info}>
                        <div className={styles.user_info}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder='Enter first name'/>
                        </div>
                        <div className={styles.user_info}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder='Enter last name'/>
                        </div>
                        <div className={styles.user_info}>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" placeholder='Enter phone number'/>
                        </div>
                        <div className={styles.user_info}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder='Enter email address'/>
                        </div>
                        
                    </div>
                    <div className={styles.form_submit_btn}>
                        <button type="submit" >Next Step</button>   
                    </div>
                </form>
            </div>

        </section>
        
                
    </div>
  )
}

export default BioData