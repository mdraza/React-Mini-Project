import React, { useState, useEffect, Fragment } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import axios from "axios";
import {makeStyles} from '@material-ui/core/styles'
import ClockLoader from "react-spinners/ClockLoader";

const CardAlbum = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false)

  const loadPost = async () => {
    setLoading(true)
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhoto(res.data);
    console.log(res.data);
    setLoading(false)
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
      <Fragment>
        {
        loading ?
        <div className="spinnertxt">
            <ClockLoader  color={'#ffc107'}  loading={loading}  size={80} />
        </div> :
        <Container component={Box} py={4}>
        <Grid container spacing={3}>
          {photo.map((photo) => (
            <Grid item md={3}>
              <Card>
                  <CardActionArea href={photo.url} component={Button}>
                      <CardMedia component='img' image={photo.thumbnailUrl}/>
                      <CardContent>
                      <Typography variant="body1">{photo.title}</Typography>
                      </CardContent>
                      <CardActions>
                          {/* <Button href={photo.url} variant="contained" color="secondary">Know More</Button> */}
                      </CardActions>
                  </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      }
      </Fragment>
  );
};

export default CardAlbum;
