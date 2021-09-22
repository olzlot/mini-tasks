import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { ActionsTypes, loadingAC, loadingType } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import { Spinner } from './spinner/Spinner';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, loadingType>(state => state.loading)
    const dispatch = useDispatch<Dispatch<ActionsTypes>>()



    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>{
            dispatch(loadingAC())
        }, 4000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <Spinner />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
