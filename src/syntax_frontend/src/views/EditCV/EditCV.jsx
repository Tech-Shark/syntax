import React from 'react'
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import Stepper from '../../components/Stepper/Stepper'
import Welcome from '../../components/WelcomeNote/Welcome'
import styles from './edit-cv.module.css'
import edit_cv_icon from '../../assets/edit-cv-icon.svg'
import delete_cv_icon from '../../assets/delete-cv-icon.svg'



function EditCV() {
  return (
    <section className={styles.edit_section}>
      <Sidebar />
      <Header/>
      <div className={styles.edit_cv_container}>
        <Welcome />
        <div className={styles.edit_container}>
            <div className={styles.edit_box_container}>
                <h2>Edit CV</h2>
                <p>Review your details</p>
                <div >
                    <div className={styles.edit_box} >
                    <h6>heading</h6>
                    <div>
                        <img src={edit_cv_icon} alt="" />
                        <img src={delete_cv_icon} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        <Stepper />
        </div>
        
      </div>
    </section>
  )
}

export default EditCV