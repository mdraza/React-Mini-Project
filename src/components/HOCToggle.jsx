import React, { Component } from 'react'

const HOCToggle = (Comp, data) => {
    return class extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 isShow: data
            }
            this.clickHandle = this.clickHandle.bind(this)
        }

        clickHandle(){
            this.setState(prevState =>{
                return{
                    isShow: !prevState.isShow
                }
            })
        }
        
        render(){
            return(
                <Comp clickHandle={this.clickHandle} isShow={this.state.isShow}/>
            )
        }
    }
}

export default HOCToggle
