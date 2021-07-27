import React from 'react';
import styles from './Error404.module.css'



function Error404() {

    return (
        <div className={styles.main}>
            <div className={styles.fof}>
                <h1>Error 404</h1>
                <p>page not found</p>
            </div>
        </div>
    )
}

export default Error404
