import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Paper,
  Typography,
  TablePagination,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

const myStyle = makeStyles(theme => ({
  root: {
    fontWeight: 'bold',
    fontSize: '16px'
  },
  txt:{
    display: 'flex',
    justifyContent: 'center'
  },
  txtClr: {
    color: "#3f51b5"
  }
}))

const TablePagination1 = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(3);

  const classes = myStyle()

  const loadPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setPost(res.data);
    console.log(res);
  };

  useEffect(() => {
    loadPost();
  }, []);

  const onChangePage = (e, nextPage) =>{
    setPage(nextPage)
  }

  const onChangeRowsPerPage = (e, value) =>{
      setRowPerPage(e.target.value)
  }

  return (
    <Container>
      <Paper component={Box} mt={5} elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.root}>Name</TableCell>
                <TableCell className={classes.root}>Email ID</TableCell>
                <TableCell className={classes.root}>Phone Number</TableCell>
                <TableCell className={classes.root}>Company</TableCell>
                <TableCell className={classes.root}>Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((post) => (
                  <TableRow>
                    <TableCell>{post.name}</TableCell>
                    <TableCell>{post.email}</TableCell>
                    <TableCell>{post.phone}</TableCell>
                    <TableCell>{post.company.name}</TableCell>
                    <TableCell>{post.website}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.txt}>
        <TablePagination
          rowsPerPageOptions={[3, 6, 9, 10]}
          count={post.length}
          rowsPerPage={rowPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          className={classes.txtClr}
        />
        </Box>
      </Paper>
    </Container>
  );
};

export default TablePagination1;
