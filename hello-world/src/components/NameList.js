import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person_iterator => <Person key={person_iterator.id} person_prop_name={person_iterator} />)
    const nameList = names.map((name, index) => <h2>Index : {index} Name : {name}</h2>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2> */}
            <div>{personList}</div>
            <div>{nameList}</div>
        </div>
    )
}

export default NameList
