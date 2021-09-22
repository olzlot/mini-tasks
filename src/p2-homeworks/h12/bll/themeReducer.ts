import { TextColorType, ThemeType } from "../HW12";

export enum ThemeReduerActionTypes{
    changeThemeC = 'CHANGE_THEME',
    changeTextC = 'CHANGE_TEXT_COLOR'
}

type ThemeReducerInitStateType = typeof initState
 
const initState = {
    theme: '' as ThemeType,
    textColor: '' as TextColorType

};

export type ThemeReducerActionsTypes = ReturnType<typeof changeThemeC>  | ReturnType<typeof changeTextC> 


export const themeReducer = (state: ThemeReducerInitStateType = initState, action: ThemeReducerActionsTypes): ThemeReducerInitStateType => { // fix any
    switch (action.type) {
        case ThemeReduerActionTypes.changeThemeC: {
            return {
                ...state,
                theme: action.theme
            };
        }
        case ThemeReduerActionTypes.changeTextC: {
            return {
                ...state,
                textColor: action.textColor
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: ThemeType ) => ({
    type: ThemeReduerActionTypes.changeThemeC,
    theme
}) as const; 

export const changeTextC = (textColor: TextColorType ) => ({
    type: ThemeReduerActionTypes.changeTextC
    ,
    textColor
}) as const; 