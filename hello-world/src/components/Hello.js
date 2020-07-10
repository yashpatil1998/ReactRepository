import React from 'react'

function Hello() {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello from Hello.js (with JSX)</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id : 'hello', className : 'dummyClass'}, 
        React.createElement('h1', null, 'Hello from Hello.js using React.createElement (without JSX)'))
}

export default Hello