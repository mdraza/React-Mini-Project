import React, {useState, useEffect} from 'react'
import {Container, Grid, Box, Paper, Button, TextField, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'

const myStyle = makeStyles(theme => ({
    root: {
        width: '55%',
        height: '95vh',
        margin: "0px auto",
    },
    memeImage: {
        width: '100%',
        height: '100%',
        borderRadius: '5px'
    },
    headSec: {
        textAlign: 'center',
        padding: '10px 0'
    },
    inputSec: {
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        padding: '14px 55px',
        marginLeft: '10px'
    },
    headTxt : {
        padding: '10px 0'
    },
    imgSec: {
        height: '65vh',
        position: 'relative'
    },
    firstText: {
        position: 'absolute',
        top: '15px',
        left: '20px',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '25px',
        width: '90%',
        padding: '0 15px'
    },
    secondText: {
        position: 'absolute',
        bottom: '25px',
        left: '20px',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '25px',
        width: '90%',
        padding: '0 15px'
    }
}))

const MemeGenerator = () => {
    const [ftext, setFtext] = useState("")
    const [ltext, setLtext] = useState("")
    const [randImg, setRandImg] = useState("https://i.imgflip.com/9sw43.jpg")
    const [allImg, setAllImg] = useState([])

    const classes = myStyle()

    const loadImg = async () => {
        const res = await axios.get('https://api.imgflip.com/get_memes')
        setAllImg(res.data.data.memes)
        // console.log(res.data.data.memes);
    }

    useEffect(() => {
        loadImg()
    }, [])

    const randNum = Math.floor(Math.random() * allImg.length)

    const newRandImg = allImg.map(img => img.url)

    const generateRandImg = () => {
        setRandImg(newRandImg[randNum])
    }

    return (
        <Container>
            <Box className={classes.root}>
                <Box className={classes.headSec}>
                    <Typography variant="h4" className={classes.headTxt} color="secondary">Meme Generator</Typography>
                    <Box className={classes.inputSec}>
                    <form autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                            <TextField id="outlined-basic" color="secondary" name="ftext" value={ftext} onChange={(e) => setFtext(e.target.value)} label="Top Text" variant="outlined" /> 
                            </Grid>
                            <Grid item md={4}>
                            <TextField id="outlined-basic" color="secondary" name="ltext" value={ltext} onChange={(e) => setLtext(e.target.value)} label="Bottom Text" variant="outlined" />
                            </Grid>
                            <Grid item md={4}>
                            <Button onClick={generateRandImg} variant="contained" color="secondary" size="large" className={classes.btn}>Generate</Button>
                            </Grid>
                        </Grid>
                        </form>
                    </Box>
                </Box>
                <Paper elevation={4} component={Box} className={classes.imgSec} >
                    
                    <img src={randImg} alt="random image" className={classes.memeImage} />
                    <Box className={classes.firstText}><Typography align="center" variant="h4">{ftext}</Typography></Box>
                    <Box className={classes.secondText}><Typography align="center" variant="h4">{ltext}</Typography></Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default MemeGenerator
