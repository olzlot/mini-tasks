import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeTextC, changeThemeC, ThemeReducerActionsTypes } from "./bll/themeReducer";
import s from "./HW12.module.css";

export type ThemeType = typeof themes[number]
export type TextColorType = typeof textC[number]

const themes = ['dark', 'red', 'some'] as const;
const textC = ['ligth', 'black', 'blue'] as const;

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme);
    const textColor = useSelector<AppStoreType, TextColorType>(state => state.theme.textColor);
    const dispatch = useDispatch<Dispatch<ThemeReducerActionsTypes>>() // useSelector

    // useDispatch, onChangeCallback
    const onChangeThemeCallback = (value: ThemeType) => {
        dispatch(changeThemeC(value))
    }
    const onChangeTextColorCallback = (value: TextColorType) => {
        dispatch(changeTextC(value))
    }

    return (
        <div className={s[theme]} >
            <hr />
            <div >
                homeworks 12
            </div>

            <div className={s.container}>
                <div> 
                    <SuperSelect options={[...themes]}
                        onChangeOption={onChangeThemeCallback} />
                        <br/>
                    theme selected: {theme}
                </div>
                <div className={s[textColor + '-text']}>
                    TEXT for TEST
                </div>
                <div> 
                    <SuperSelect options={[...textC]}
                        onChangeOption={onChangeTextColorCallback} />
                        <br/>
                    text color: {textColor}
                </div>
               
            </div>
            <SuperRadio />


            <hr />
        </div>
    );
}

export default HW12;
