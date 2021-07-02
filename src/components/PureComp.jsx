import React, { Component, PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle(){
        this.setState(prevState => {
            return{
                count: 1
            }
        })
    }
    
    render() {
        console.log('Re-rendering');
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandle}>Click Me</button>
            </div>
        )
    }
}

export default PureComp
