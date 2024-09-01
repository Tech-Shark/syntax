import React, { useState } from 'react';
import styles from './header.module.css';
import search_icon from '../../assets/icons8-search.svg';
import Sidebar from '../../components/Sidebar_CV/Sidebar'; // Ensure the path is correct

function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={styles.header_container}>
          <div>
            <Sidebar isOpen={isSidebarOpen} />
          </div>
            <div className={styles.input_wrapper}>
                {/* <img src={search_icon} alt="Search" className={styles.search_icon} /> */}
                <input 
                    type="text" 
                    placeholder="Search for existing projects here..." 
                    className={styles.search_input} 
                />
            </div>
            <div className={styles.sidebarToggle}>
              <button onClick={toggleSidebar}>
                  ☰
              </button>
            </div>
        </div>
    );
}

export default Header;
