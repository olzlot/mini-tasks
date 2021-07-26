import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
    priorityN: number
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    { _id: 1, name: 'React', priority: 'high', priorityN: 0 },
    { _id: 2, name: 'anime', priority: 'low', priorityN: 2 },
    { _id: 3, name: 'games', priority: 'low', priorityN: 2 },
    { _id: 4, name: 'work', priority: 'high', priorityN: 0 },
    { _id: 5, name: 'html & css', priority: 'middle', priorityN: 1 },
]
defaultAffairs.sort((a, b) => (a.priorityN - b.priorityN))

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): AffairType[] => { // need to fix any

    if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    else return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr />
            homeworks 2
            <hr />
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    )
}

export default HW2
