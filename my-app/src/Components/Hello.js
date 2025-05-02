import React from 'react'

//This example of a component does use JSX

// This is the standard way of doing it
// const Hello = () => {
//     return( 
//          <div className: 'dummyClass'>
//           <h1>Hello Adam</h1>
//         </div>
//     )
// }

// if we wanted to not use JSX it would look like this
// We will almost never do this
const Hello = () => {
    return React.createElement(
        'div', 
        {id: "My Id", className: 'dummyClass'},
        React.createElement('h1', null, "Hello Adam")
    )
}

export default Hello