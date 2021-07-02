import React, { Component } from 'react'
import HOC from './HOC'

class CommentCounter extends Component {
    render() {
        return (
            <div>
                <h3>Comments: {this.props.counter}</h3>
                <button onClick={this.props.likeHandle}>Click to Comment</button>
            </div>
        )
    }
}

const hocComment = HOC(CommentCounter, 5)
export default hocComment
