import React, { Component } from 'react'

class ClassClick extends Component {
    // Note how we do not use parentheses below.  The event handler is a function and NOT a function call
    clickHandler() {
        console.log('Clicked in class')
    }
    
    render() {
        return (
            <div>
               <button onClick={this.clickHandler}> click me class</button>
            </div>
        )
    }
}

export default ClassClick