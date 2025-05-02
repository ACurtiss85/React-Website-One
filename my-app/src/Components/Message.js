import React, { Component} from 'react'

class Message extends Component {
    
    constructor() {
      //This is required because we extend Component class and we must make a call to base class constructor  
      super()
      // We have to use 'this' because we are in a class
      this.state = {
        message: 'Welcome visitor from Message.js'
      }
    }

    changeMessage() {
       this.setState({
         message: 'Text Changed by changing state in Message.js'
        })
    }
    
    render() {
      // The curly braces below binds the state value in the render function
      // The parentheses is required because the JSX spans over multiple lines now
      // We need the div tag because React only wants one element returned
      return( 
        <div>
          <h1>{this.state.message}</h1>
          {/* The onclick is called a handler */}
          <button onClick = {() => this.changeMessage()}>Push me to change text</button>
        </div>
      )           
    }
}

export default Message