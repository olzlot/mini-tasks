import React from 'react'
import { Slider } from 'antd';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number],
    disable?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, disable
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            {/* DoubleRange */}
            <Slider range value={[value[0], value[1]]}
                onChange={onChangeRange}
                disabled={disable}
                />
        </>
    )
}

export default SuperDoubleRange
