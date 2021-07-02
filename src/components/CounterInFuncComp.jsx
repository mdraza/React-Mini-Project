import React, { useState, useEffect } from "react";
import { Typography, Paper, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import randomcolor from 'randomcolor'

const myStyle = makeStyles((theme) => ({
  root: {
    width: "25%",
    padding: "10px 0 20px",
    margin: "auto",
    textAlign: "center",
    marginTop: "100px",
    backgroundColor: "#ffeb3b",
  }
}));

const CounterInFuncComp = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("")
  const classes = myStyle();

  const incHandle = () => {
    setCount(count + 1);
  };
  const decHandle = () => {
    setCount(count - 1);
  };

  useEffect(() => {
      setColor(randomcolor())
  }, [count])

  return (
    <Paper component={Box} className={classes.root} elevation={3} color={color}>
      <Typography variant="h1">{count}</Typography> <br />
      <Button
        size="large"
        onClick={incHandle}
        variant="contained"
        color="secondary"
      >
        <AddIcon />
      </Button>
      &nbsp;
      <Button
        size="large"
        onClick={decHandle}
        variant="contained"
        color="secondary"
        disabled={count < 1}
      >
        <RemoveIcon />
      </Button>
    </Paper>
  );
};

export default CounterInFuncComp;
