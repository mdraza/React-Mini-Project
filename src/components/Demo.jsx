import React, { Component } from 'react'

export class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname: '',
             lname: ''
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" name="fname" value={this.state.fname} />
            </div>
        )
    }
}

export default Demo
