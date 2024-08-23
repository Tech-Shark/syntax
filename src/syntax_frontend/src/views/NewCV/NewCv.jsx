import React from 'react'
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import styles from './new-cv.module.css'
import { useState } from 'react'
import { syntax_backend } from 'declarations/syntax_backend'
import spinner from '../../assets/spinner.svg'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function NewCv() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cvText, setCvText] = useState('');
    const [loading, setLoading] = useState(false); 
    const [response, setResponse] = useState(null); 

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
        // const authClient = await AuthClient.create();
        
        // Retrieve the user's principal (identifier)
        // const identity = authClient.getIdentity();
        // const principal = identity.getPrincipal().toText();

        // Use the principal as the identifier
        // console.log("User Principal: ", principal);
        setLoading(true);
    
        let userInput = {
            job_title: title,
            job_description: description,
            cv_text: cvText,
        };
        
        const result = await syntax_backend.analyze_cv(identifier, userInput);
        
        if ('Ok' in result) {
            const analysis = result.Ok.result;
            setLoading(false);
            setResponse(analysis);
        } else if ('Err' in result) {
            console.error('Error:', result.Err.message);
        }
    }


    function downloadPDF() {
        const content = document.querySelector('#response_content'); 
        const originalStyle = content.style.maxHeight;
        content.style.maxHeight = 'none';
    
        html2canvas(content, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width; 
    
            let heightLeft = imgHeight;
            let position = 0;
    
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= 297; 
    
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= 297;
            }
    
            pdf.save('cv_analysis.pdf');
    
            content.style.maxHeight = originalStyle;
        });
    }
    
    return (
        <div>
            {!response ? (
                <div className={styles.new_cv_container}>
                    <div className={styles.header_container}>
                    <Header />
                    </div>
                    <div className={styles.main_body}>
                        <div className={styles.sidebar_container}>
                            <Sidebar />
                        </div>
                        <section className={styles.main_section}>
                            {/* <Header /> */}
                            <h2>Create New CV</h2>
                            <div className={styles.main_cv_container}>
                                <div className={styles.cv_container}>
                                    <div className={styles.left_container}>
                                        <div className={styles.input_box}>
                                            <label htmlFor="job_title">Job Title</label>
                                            <input type="text" placeholder='Enter job title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div className={styles.input_box}>
                                            <label htmlFor="job_title">Job Description</label>
                                            <textarea
                                                className={styles.textarea}
                                                placeholder="Enter job description"
                                                onInput={handleDescription}
                                                value={description}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className={styles.right_container}>
                                        <div className={styles.left_input_box}>
                                            <label htmlFor="job_title">CV text</label>
                                            <textarea
                                                className={styles.textarea}
                                                placeholder="Enter CV"
                                                onInput={handleCVText}
                                                value={cvText}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSubmit} disabled={!title || !description || !cvText || loading}>
                                    {loading ? 'Generating...' : 'Generate CV'}
                                </button>
                            </div>
                            <div className={styles.spinner_container}>
                                <img src={spinner} alt="spinner-img" className={loading ? '' : styles.spinner} />
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <div className={styles.cv_response_container}>
                    <h1>CV Response</h1>
                    <div className={styles.response_container}>
                        <div className={styles.response_input_box}>
                            <label htmlFor="cv_text">Here is your CV</label>
                            <div className={styles.response_content} id='response_content'>
                                <h1>Skills</h1>
                                <p>{response.skills}</p>
                                <h1>Work Experience</h1>
                                <p>{response.work_experience}</p>
                                <h1>Suggestions</h1>
                                <p>{response.suggestions}</p>
                            </div>
                        </div>
                        <button onClick={downloadPDF}>Download PDF</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewCv;
