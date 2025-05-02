import React, { Component } from 'react'



class EventBind extends Component {
    // old constructor before binding
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         message: 'Hello'
    //     }
    // }

    // This is how to bind the event handler in the constructor
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        // The below 3 lines will cause an error when button is pressed if we dont bind the event handler
        // because otherwise 'this' is undefined in the handler mathod (and in other non object methods)
        this.setState({
           message: 'Goodbye'
        })
        //'this' is underfned in the console at this point
        console.log(this)
    }

    // original render method with no bind
    // render() {
    //     return (
    //         <div>
    //             <div> {this.state.message} </div>
    //             <button onClick = {this.clickHandler}> Click Event Bind </button>
    //         </div>
    //     )
    // }

    // first way of binding
    // In this instance the word 'this' in the clickHandler refers to the event bind component instance
    // This way works fine but it causess the component to re-render with each update to the state
    // This in turn will generare a new event handler on each on every render
    // render() {
    //     return (
    //         <div>
    //             <div> {this.state.message} </div>
    //             <button onClick = {this.clickHandler.bind(this)}> Click Event Bind </button>
    //         </div>
    //     )
    // }

    // Here we use an arrow function to bind
    // We dont need curly braces or return keyword for arrow function becasuse it is a single statement
    // Also we are calling the event handler and returning that value, that is why parantheses are necessary here this.clickHandler()
    // This way also has some performance issues in some cases he doesn't go into detail about
    // render() {
    //     return (
    //         <div>
    //             <div> {this.state.message} </div>
    //             <button onClick = {() => this.clickHandler()}> Click Event Bind </button>
    //         </div>
    //     )
    // }

    // This is the approach we will see most ofter and is the official way react says to do it
    // This way says to bind in the constructor instead of render method. See above
    // Note that the parentheses are gone after the work clickHandler here
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick = {this.clickHandler}> Click Event Bind </button>
            </div>
        )
    }


    // This is the 4th way to do it. Ussing an arrow functoin as a class property.  Replace the clickHandler with this  
    // clicHandler = () => {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }
}

export default EventBind