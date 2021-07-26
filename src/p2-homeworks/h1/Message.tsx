import React from 'react'
import styles from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    const { avatar, name, message, time } = props 

    return (
        <div className={styles.message_wrapper}>
            <div className={styles.logo}>
                <img src={avatar} alt="logo" />
            </div>
            <div className={styles.message}>
                <div className={styles.name}>{name}</div>
                <div className={styles.text}>{message}</div>

                <div className={styles.time}>{time}</div>

            </div>
        </div>
    )
}

export default Message
