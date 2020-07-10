import React from 'react'

function Greet({name, age}) {
    console.log(name, age)
    return (
        <div>
            <h1>Hello, {name} ! Age = {age}</h1>
            {/* {props.children} */}
        </div>
    )
}

// const Greet = () => <h1>Hello, DB !</h1>

export default Greet