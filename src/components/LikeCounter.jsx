import React, { Component } from 'react'
import HOC from './HOC'

class LikeCounter extends Component {
    render() {
        return (
            <div>
                <h3>Likes - {this.props.counter}</h3>
                <button onClick={this.props.likeHandle}>Like Me</button>
            </div>
        )
    }
}
const hocLike = HOC(LikeCounter, 25)
export default hocLike
