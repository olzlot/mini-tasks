import React from 'react';
import styles from './AlternativeMessage.module.css'
import {MessageType} from './Message'


function AlternativeMessage(props: MessageType) {
    const { avatar, name, message, time } = props

    return (
        <div className={styles.message_wrapper}>
            
            <div className={styles.message}>
                <div className={styles.name}>{name}</div>
                <div className={styles.text}>{message}</div>

                <div className={styles.time}>{time}</div>

            </div>
            <div className={styles.logo}>
                <img src={avatar} alt="logo" />
            </div>

        </div>
    )
}

export default AlternativeMessage
