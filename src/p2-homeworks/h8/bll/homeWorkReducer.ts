import { UserType } from "../HW8"

type AcionsType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: AcionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                return [...state.sort((a,b) => a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1)]
            } else {
                return [...state.sort((a,b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? -1 : 1)]
            }

        }
        case 'check': { 
            // need to fix
            return state.filter(u => u.age > action.payload)
        }
        default: return state
    }
}