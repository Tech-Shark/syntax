import React from 'react'
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import styles from './new-cv.module.css'
import { useState } from 'react'
import { syntax_backend } from 'declarations/syntax_backend'

function NewCv() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cvText, setCvText] = useState('');

    function handleCVText(event) {
        event.target.style.height = "auto"; 
        event.target.style.height = `${event.target.scrollHeight}px`; 
        setCvText(event.target.value);
      }
    function handleDescription(event) {
        event.target.style.height = "auto"; 
        event.target.style.height = `${event.target.scrollHeight}px`; 
        setDescription(event.target.value);
      }

      async function handleSubmit() {
        const identifier = "2599809"; 
    
        // Create the CVUserInput object
        let userInput = {
            job_title: title,
            job_description: description,
            cv_text: role,
        };
        console.log(userInput);
        
    
            // Call the analyze_cv function
            const result = await syntax_backend.analyze_cv(identifier, userInput);
            console.log(result);
            // Check if the response is Ok or Err
            if ('Ok' in result) {
                const analysis = result.Ok.result;
                console.log('Skills:', analysis.skills);
                console.log('Work Experience:', analysis.work_experience);
                console.log('Suggestions:', analysis.suggestions);
            } else if ('Err' in result) {
                console.error('Error:', result.Err.message);
            }
       
    }
    
  return (
    <div className={styles.new_cv_container}>
        <Header />
        <div className={styles.main_body}>
        <div className={styles.sidebar_container}>
        <Sidebar />
        </div>
        <section className={styles.main_section}>
        <h2>Create New CV</h2>
            <div className={styles.cv_container}>
                
            <div className={styles.left_container}>
            <div className={styles.input_box}>
                <label htmlFor="job_title">Job Title</label>
                <input type="text" placeholder='Enter job title' />
            </div>
            <div className={styles.input_box}>
                <label htmlFor="job_title">Job Description</label>
                <textarea 
                        className={styles.textarea}
                        placeholder="Paste your job description"
                        onInput={handleDescription}
                        value={description}
                        >
                </textarea> 
            </div>
            </div>
            <div className={styles.right_container}>
            <div className={styles.left_input_box}>
                <label htmlFor="job_title">CV text</label>
                <textarea 
                        className={styles.textarea}
                        placeholder="Paste your job CV"
                        onInput={handleCVText}
                        value={cvText}
                        >
                </textarea> 
            </div>
            </div>
            </div>
            <button onClick={handleSubmit}>Generate CV</button>
            
        </section>
        </div>
        
        
        {/* <section className={styles.main_section}>
        <header>New CV</header>
            <div className={styles.big_container}>
            <div className={styles.text_container}>
                <section className={styles.section}>
                    
                    <form action="">
                        <div className={styles.input_box}>
                            <label htmlFor="">Job Title</label>
                            <input type="text" placeholder='Enter Job Title' onChange={(e) => (setTitle(e.target.value))} />
                        </div>
                    
                    <div className={styles.text_area_box}>
                        <label htmlFor="">Job Description</label>
                        <textarea 
                        className={styles.auto_textarea}
                        placeholder="Paste your job description"
                        onInput={handleDescription}
                        value={description}
                        ></textarea>  
                    </div>
                    </form>
                </section>
            </div>
            <div className={styles.role_container}>
            <div className={styles.text_area_box}>
                        <label htmlFor="">Job Roles</label>
                        <textarea 
                        className={styles.textarea}
                        placeholder="Paste job requirements"
                        onInput={handleRole}
                        value={role}
                        ></textarea>  
                    </div>
            </div>
            </div>
            <div className={styles.button_container}>
                <button onClick={handleSubmit}>Generate CV</button>
            </div>
            
        </section> */}
       
    </div>
  )
}

export default NewCv