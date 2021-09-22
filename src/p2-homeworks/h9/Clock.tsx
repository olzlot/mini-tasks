import React, { useEffect, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const [counting, setCounting] = useState<boolean>(false)

    const stop = () => {
        // setCounting(false)
        clearInterval(timerId)
        // stop
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        console.log(id);
        
        setTimerId(id)
        // setCounting(true)
    }

    // useEffect(()=> {
    //     counting &&
    //     setDate(new Date())
    // }, [date, counting])

    const onMouseEnter = () => {
        setShow(true)
        // show
    }
    const onMouseLeave = () => {
        setShow(false)
        // close
    }

    const giveZero = (num:number) => {
        return (num < 10) ?  '0'+ num : num
    }

    const stringTime = date && giveZero(date.getHours()) + ":" + giveZero(date.getMinutes()) + ":" + giveZero(date.getSeconds()) // fix with date
    const stringDate = date && date.getFullYear()+'-'+giveZero(date.getMonth()+1)+'-'+giveZero(date.getDate()) // fix with date

    return (
        <div style={{position:'relative'}}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div style={{position: 'absolute'}}>
                    {stringDate}
                </div>
            )}
            <br /> 

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
