import React from 'react'
import styles from "./new-project.module.css"
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import Stepper from '../../components/Stepper/Stepper'
import Welcome from '../../components/WelcomeNote/Welcome'

function NewProject() {
  return (
    <section className={styles.new_project_section}>
      <Sidebar />
      <Header />
      <div className={styles.new_project_container}>
       <Welcome />
       <section>
          <div className={styles.upload_cv_container}>
          <h1>Generate CV</h1>
          <p>Fill out these details to build your CV</p> 
          <div>
          <div className={styles.pdf_container}>
            <p>Generating CV</p>
            </div>
            <div className={styles.button_container}>
              <button>Previous Page</button>
              <button>Review CV</button>
            </div>
          </div>
          </div>
         <Stepper />
       </section>
    </div>
    </section>
    
  )
}

export default NewProject