import React, {useReducer} from 'react'
import {Box, Paper, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const myStyle = makeStyles(theme => ({
    root: {
        width: '20%',
        padding: '5px 0 30px',
        margin: '50px auto',
        textAlign: 'center'
    },
    txt: {
        color: theme.palette.success.main
    }
}))

const initialState = 0

const reducer = (state, action) =>{
    switch(action.type){
        case "INC":
            return state + 1

        case "DEC":
            return state - 1

        default:
            return state        
    }
    
}

const ContextCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addHandle = () =>{
        dispatch({type: 'INC'})
    }
    const subHandle = () =>{
        dispatch({type: 'DEC'})
    }

    const classes = myStyle()
    return (
        <Paper elevation={3} component={Box} className={classes.root}>
            <Typography variant="h1" className={classes.txt}>{state}</Typography>

            <Button variant="contained" color="primary" onClick={addHandle}>ADD</Button> &nbsp; 
            <Button variant="contained" color="secondary" onClick={subHandle} disabled={state < 1 ? true : false  }>SUB</Button>
        </Paper>
    )
}

export default ContextCounter
