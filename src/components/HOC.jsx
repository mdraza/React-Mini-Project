import React, { Component } from 'react'

const HOC = (Comp, data) => {
    return class extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 like: data
            }
            this.likeHandle = this.likeHandle.bind(this)
        }
        likeHandle(){
            this.setState(prevState =>{
                return{
                    like: prevState.like + 1
                }
            })
        }
        
        render(){
            return(
                <Comp likeHandle={this.likeHandle} counter={this.state.like} />
            )
        }
    }
}

export default HOC
