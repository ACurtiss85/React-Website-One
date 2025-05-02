import React from 'react'



// Note how we do not use parentheses below.  The event handler is a function and NOT a function call
const FunctionClick = () => {
    // It is possible to create a function inside another function in JS 6
    function clickHandler() {
        console.log("button clicked")
    }

    return (
        <div>
            <button onClick = {clickHandler}> Click me function </button>
        </div>
    )
}

export default FunctionClick