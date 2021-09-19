import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
    backgroundColor:"#EEEDE7",
    padding:theme.spacing(10)
  },
  button: {
    marginTop: theme.spacing(5),
  },
  head:{
    transform:'translateX(50%)',
    fontWeight:'bold',
    opacity:.9,
    width:"50%",
    marginTop:theme.spacing(1)
  },
  description:{
    marginTop:theme.spacing(5),
    opacity:0.7
},
}));
function Update() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <img className={classes.body}
              src="https://img.icons8.com/color/50/000000/google-logo.png"
              alt="google logo"
            />
      <Typography className={classes.head}   variant="h3">
      Keep me updated about devices, news, tips and offers from Google Store.
      </Typography>
      {/* <Button variant="outlined" color="primary">Find Retailers</Button> */}
      <div className={classes.button}>
        <button className="btn btn-outline-primary">Sign up</button>
      </div>
      <div>
          <Typography className={classes.description} variant="body1">By submitting your email, you accept the terms & conditions.</Typography>
      </div>
      </div>
  );
}

export default Update;
