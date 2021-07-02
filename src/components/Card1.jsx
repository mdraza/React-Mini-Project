import React from 'react'
import {Container, Box, IconButton, CardHeader, Avatar, Grid,Typography, Card, CardContent, Button, CardActions, CardActionArea, CardMedia} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const myStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        // height: '100vh',
        backgroundColor: theme.palette.info.light,
        paddingTop: theme.spacing(4)
    }
}))

const Card1 = () => {
    const classes = myStyle()
    return (
        <Box className={classes.root}>
            <Container>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card>
                        <CardHeader action={<IconButton><ShoppingCartIcon/></IconButton>} avatar={<Avatar style={{color:'white', backgroundColor:'orange'}}>MR</Avatar>} title="Muhammad Razaullah" subheader="Hi, I am a Frontend Developer"/>
                        <CardActionArea>
                            <CardMedia component="img" image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg"/>
                        <CardContent>
                            <Typography variant="h5">Post Title</Typography>
                            <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardHeader action={<IconButton><ShoppingCartIcon/></IconButton>} avatar={<Avatar>UR</Avatar>} title="Umama Raza" subheader="Hi, I am Umama Raza"/>
                        <CardActionArea>
                        <CardMedia component="img" image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg"/>
                        <CardContent>
                            <Typography variant="h5">Post Title</Typography>
                            <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardHeader action={<IconButton><ShoppingCartIcon/></IconButton>} avatar={<Avatar>JR</Avatar>} title="Juwayriya Raza" subheader="Hi, I am Juwayriya Raza" />
                        <CardActionArea>
                        <CardMedia component="img" image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg"/>
                        <CardContent>
                            <Typography variant="h5">Post Title</Typography>
                            <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </Box>
    )
}

export default Card1
