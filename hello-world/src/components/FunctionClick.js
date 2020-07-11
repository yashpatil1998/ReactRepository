import React from 'react'

function FunctionClick() {
    
    function clickHandler() {
        console.log('Function Button clicked !')
    }
    
    return (
        <div>
            <button onClick={() => clickHandler()}>Function Click</button>
        </div>
    )
}

export default FunctionClick
