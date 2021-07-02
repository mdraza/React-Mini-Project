import React, { Component, Fragment } from 'react'
import HOCToggle from './HOCToggle'

class HocFav extends Component {
    render() {
        return (
            <Fragment>
                <button className="toggle-btn" onClick={this.props.clickHandle}>HIDE/SHOW</button>
                <div className="toggle-data" style={{display: this.props.isShow ? 'block': 'none'}}>
                    <h2>Hi, This is Muhammad Razaullah Ansari</h2>
                    <p>I am a Frontend / UI Developer</p>
                </div>
            </Fragment>
        )
    }
}

export default HOCToggle(HocFav, true)
