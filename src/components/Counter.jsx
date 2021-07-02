import React, {useState} from 'react'
import {Paper, Box, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import randomcolor from 'randomcolor'

const myStyle = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25%',
        padding: '20px',
        textAlign: 'center'
        
    },
    txt:{
        fontSize: '80px',
        fontWeight: 900
    }
}))

const Counter = () => {
    const classes = myStyle()
    const [count, setCount] = useState(0)
    const incHandle = () => {
        setCount(count + 1)
    }
    const decHandle = () => {
        setCount(count - 1)
    }
    

    return (
        <Paper className={classes.root}  component={Box}  elevation={3}>
            <Typography variant="h3" gutterBottom className={classes.txt} style={{color: randomcolor()}}>{count}</Typography>
            <Button variant="contained" size="large" color="primary" onClick={incHandle}>Add</Button> &nbsp;
            <Button disabled={count < 1} variant="contained" size="large" color="primary" onClick={decHandle}>Sub</Button> &nbsp;

        </Paper>
    )
}

export default Counter
