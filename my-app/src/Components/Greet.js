import React from 'react'

// We want to use arrow functions
// function Greet() {
//     return <h1> Hello Adam</h1>
// }

// We could also say export const Greet = () => <h1> Hello Adam</h1> and then when importing 
// in App.js we would have to use name Greet exactly import {Greet} from './Components/Greet'
// these are called named exports
// this is why we have to import react library

//This old code was before I learned destructuring
// const Greet = (props) => {
//     console.log("Testing")
//     console.log(props)
//   return (
//     <div>
//         <h1> Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//     </div>
//   ) 
// }

// This is how to destructure props in the function parameter
// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       {/* dont need props.name or props.heroName anymore because of destructuring */}
//       <h1> Hello {name} a.k.a {heroName}</h1>
//     </div>
//   )
// }

// This is how to desructure props in the function body
const Greet = props => {
  const {name, heroName} = props 
  return (
    <div>
      {/* dont need props.name or props.heroName anymore because of destructuring */}
      <h1> Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}

export default Greet