import React, {useState, useEffect} from 'react'
import Pagination from '@material-ui/lab/Pagination'
import {Box,Paper, Typography, Container, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'

const myStyle = makeStyles(theme => ({
    root: {
        justifyContent: 'center',
        padding: '20px 0',
        display: 'flex'
    },
    gridBg: {
        backgroundColor: '#ffeb3b',
        color: theme.palette.grey[900]
    }
}))

const GridPagination = () => {
    const classes = myStyle()
    const [page, setPage] = useState(1)
    const [post, setPost] = useState([])

    const loadUser = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
        setPost(res.data)
    }
    
    useEffect(() => {
        loadUser()
    }, [post])

    return (
        <Container>
            <Box component={Box}  mt={4}>
                <Grid container spacing={3}>
                    {
                        post.map(post => (
                            <Grid item md={6} >
                                <Paper component={Box} p={2} style={{height: '210px'}} elevation={3} className={classes.gridBg}>
                                    <Typography variant="h6" gutterBottom>Post No.: {post.id}</Typography>
                                    <Typography variant="body1" gutterBottom><b>Name:</b> {post.name}</Typography>
                                    <Typography variant="body1" gutterBottom><b>Email:</b> {post.email}</Typography>
                                    <Typography variant="body1"><b>Post:</b> {post.body}</Typography>
                                </Paper>
                            </Grid>
                        ))
                    }
                    
                </Grid>
                <Box className={classes.root}>
                    <Pagination count={10} color="primary" shape="rounded" size="large" showFirstButton showLastButton onChange={(e, value) => setPage(value)}/>
                </Box>
            </Box>
        </Container>
    )
}

export default GridPagination
