export enum ACTypes {
    SET_LOADING = "SET_LOADING"
}


const initState = {
    loading: false
}
export type loadingType = typeof initState

export type ActionsTypes = ReturnType<typeof loadingAC>

export const loadingReducer = (state: loadingType = initState, action: ActionsTypes): loadingType => { // fix any
    switch (action.type) {
        case ACTypes.SET_LOADING: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        default: return state
    }
}

export const loadingAC = () => ({
    type: ACTypes.SET_LOADING
}) as const