import React from 'react'
import syntax_logo from '../../assets/syntax-logo.svg'
import button_icon from '../../assets/button-icon.svg'
import new_project from '../../assets/new_project.svg'
import history_icon from '../../assets/history_icon.svg'
import setting_icon from '../../assets/setting-icon.svg'
import faqs_icon from '../../assets/faqs-icon.svg'
import logout_icon from '../../assets/logout-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import styles from './sidebar.module.css'

function Sidebar() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(""); 


    const handleNavigation = (event) => {
        const value = event.target.value;
        if (value) {
          setSelectedOption(value)
          navigate(value);
        }
      };

  return (
    <div className={styles.sidebar_bg}>
        <header className={styles.logo_container} >
            <img src={syntax_logo} alt="syntax-logo" />
            
        </header>
        <nav className={styles.nav}>
           <ul>
                <li>
                    {/* <span>CV Enhancer</span>
                    <img src={button_icon} alt="button-icon" /> */}
                    <select name="menu" id="" onChange={handleNavigation} value={selectedOption}>
                        <option value="/grammar">
                            Grammar
                        </option>
                        <option value="/cv-enhancer">CV Enhancer</option>
                    </select>
                </li>
            </ul> 
        </nav>
        <nav className={styles.nav}>
            <ul>
            <li className={styles.menu}>Menu</li>
            <li>
                <img src={new_project} alt="new-project-icon" />
                <span>New Project</span>
            </li>
            <li>
                <img src={history_icon} alt="history-icon" />
                <span>History </span>   
            </li>
            </ul>
        </nav>
        <nav className={styles.nav}>
            <ul>
            <li className={styles.menu}>Account</li>
            <li>
            <img src={setting_icon} alt="history-icon" />
                <span>Settings</span>
            </li>
            <li>
            <img src={faqs_icon} alt="history-icon" />
                <span>FAQs</span>
            </li>
            </ul>
        </nav>
        <nav className={styles.nav}>
            <ul className={styles.logout_nav}>
                <li>
                <img src={logout_icon} alt="history-icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar