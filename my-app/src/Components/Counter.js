import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    changeCount() {
        // If we don't use the setState method
        // this.state.count = this.state.count + 1
        // The value will update in the console but not in the UI you can console.log it to see
        // the 2nd parameter of setState is a callback function to make sure that the console.log occurs only after setState

        // The code below will not work with changeCountByFive()
        // We need to pass in a method instead
        // Note that the callback function as 2nd parameter is how we get the correct value in the console
        // this.setState(
        //   {
        //     count: this.state.count + 1
        //   },
        //   () => {
        //     console.log('Callback value ', this.state.count) 
        //   }
        // )
        // console.log('not callback value wont update console ', this.state.count)

        // This is how to correctly update the state based on previous state
        // Note that we do not pass in another function for teh callback value here.  He didnt do one in the video
        this.setState((prevState) => (
                {
                  count: prevState.count + 1
                }
            ),
            () => {
              // This is a callback function as the 2nd parameter.  It should give a correct count in the console 
              // This is because the console log call in asynchronous compared to the setState call 
              console.log('Callback value, should be correct in console ', this.state.count) 
            }
        )
        console.log('not callback value wont update console', this.state.count)
    }

    changeCountByFive() {
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
    }

    render() {
        return (
            <div>
                <div> Count is - {this.state.count} </div>
                <button onClick={() => this.changeCountByFive()}>Push to increment</button>
            </div>
        )
    }
}

export default Counter

