import React from 'react'
import { PATH } from './Routes';
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'


function Header() {
    return (
        <div className={styles.navbar}>
            <div className={styles.inner}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={styles.active}>pre-JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={styles.active}>JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={styles.active}>JUNIOR-plus</NavLink>
                <div className={styles.button}></div>
            </div>
        </div>
    )
}

export default Header
