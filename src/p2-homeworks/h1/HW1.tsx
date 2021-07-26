import React from 'react';
import Message, { MessageType } from './Message';
// import AlternativeMessage from './AlternativeMessage';

const messageData: MessageType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Lorem ipsum dolor sit amet consec tempore dolorum aut officiis animi nesciunt sunt, voluptates doloremque molestias velit ut maiores. Ducimus quia nostrum nam voluptatibus.',
    time: '22:00',
}


function HW1() {
    return (
        <div>
            <hr />
            homeworks 1
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <hr />
            {/*для личного творчества, могу проверить*/}
            {/* <AlternativeMessage
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr /> */}
        </div>
    )
}

export default HW1
