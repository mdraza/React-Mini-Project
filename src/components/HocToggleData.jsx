import React, { Component } from 'react'
import HOCToggle from './HOCToggle'

class HocToggleData extends Component {
    render() {
        return (
            <div className="toggle-fav">
                <img style={{width: '6%'}} src={this.props.isShow ? "https://i.ibb.co/yVh2HfL/heart-1.png" : "https://i.ibb.co/S0Qg4wP/heart.png"} onClick={this.props.clickHandle}/>
            </div>
        )
    }
}

export default HOCToggle(HocToggleData, false)
