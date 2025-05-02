import React, { Component } from 'react'

// here we do not need to specity the 'props' paremeter instead we use this.props.name because this is a class

// this old code was about props before we learned destructuring
// class Welcome extends Component {
//     render() {
//         return <h1> Welcome {this.props.name} a.k.a {this.props.heroName}  </h1>
//     }
// }

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        // To destructure state properties.  We dont have state here but this is what it will look like
        //const {state1, state2} = this.state
        return <h1> Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome