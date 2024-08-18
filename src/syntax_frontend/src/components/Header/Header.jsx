import React from 'react'
import styles from './header.module.css'
import search_icon from '../../assets/icons8-search.svg'
import notification_icon from '../../assets/notification_icon.svg'
import logo_icon from '../../assets/logo.svg'

function Header() {
  return (
    <div className={styles.header}>
    <div className={styles.header_container}>
        <div className={styles.input_wrapper}>
        <img src={search_icon} alt="search-icon" className={styles.search_icon}  />
        <input type="text" placeholder="Search for existing projects here..." className={styles.search_input} />
        

        </div>
        <div className={styles.logo_div}>
            <img src={notification_icon} alt="notification-icon" />
            <div >
            <img src={logo_icon} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header