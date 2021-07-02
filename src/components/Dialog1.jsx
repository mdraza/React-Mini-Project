import React,{useState} from 'react';
import {Button, Container, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Checkbox} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const myStyle = makeStyles(theme => ({
    root: {
        paddingBottom: 0
    },
    btn: {
        margin: 'auto'
    }
}))

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const classes = myStyle()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component={Box} py={4}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Click to SignUp
      </Button>
      <Box >
      <Dialog fullWidth open={open}  onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.root}>SignUp Form</DialogTitle>
        <DialogContent>
            <Box component="form">
            <TextField
            placeholder="Enter First Name"
            margin="normal"
            id="name"
            type="text"
            fullWidth
            variant="outlined"
            color="primary"
          />
          <TextField
            placeholder="Enter Last Name"
            margin="normal"
            id="name"
            type="text"
            fullWidth
            color="primary"
            variant="outlined"
          />
          <TextField
            placeholder="Enter Email Address"
            margin="normal"
            id="name"
            color="primary"
            type="email"
            fullWidth
            variant="outlined"
          />
          <FormControlLabel
                control={<Checkbox  name="checkedA" color="primary"/>}
                label="Accepting Term & Condition"
            />
        </Box>
          
        </DialogContent>
        <Box py={2} mt={0} component={Container}>
        <Button variant="contained" fullWidth  onClick={handleClose} color="primary" size="large">
            SIGNUP
          </Button>
        </Box>
      </Dialog>
      </Box>
      
    </Container>
  );
}
