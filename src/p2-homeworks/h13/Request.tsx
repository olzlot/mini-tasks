import React, { useState } from 'react';
import { requestApi } from './requestAPI';


export const Request = () => {

    const [response, setResponse] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const sendRequest = () => {
        requestApi.post(checkbox)
            .then(res => {
                setResponse(res.data.errorText)
            })
            .catch(err => {
                setResponse(err.response.data.errorText)
                
            })

    }

return (
    <div style={{ marginLeft: '20px' }}>
        <div>
            <input type={'checkbox'}
                checked={checkbox}
                onChange={() => setCheckbox(!checkbox)} 
                />
            <div>{response}</div>
        </div>
        <button onClick={sendRequest}>Send</button>

    </div>
)
}