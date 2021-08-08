import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styles from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('sfsfsfs')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => { 
        
        setValue(restoreState<string>('editable-span-value', 'LocalStorage is empty'))
    }
    

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={styles.HW6}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...',
                                className: styles.SuperEditableSpan}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
