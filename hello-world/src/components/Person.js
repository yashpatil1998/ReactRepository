import React from 'react'

function Person({person_prop_name}) {
    
    return (
        <div>
            <h2>ID : {person_prop_name.id}, Name: {person_prop_name.name}</h2>
        </div>
    )
}

export default Person
