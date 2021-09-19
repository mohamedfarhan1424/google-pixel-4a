import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import recordPhone from "../Images/Image.png";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    display:"flex"
  },
  root2: {
    position: "sticky",
    top: 0,
    alignSelf:"flex-start"
  },
  body: {
    width: "80%",
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(40),
  },
  body2: {
    textAlign: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.7vw",
    opacity: 0.9,
  },
  heady: {
    marginTop: theme.spacing(10),
    width: "90%",
    fontWeight: "bold",
    fontSize: "2vw",
    opacity: 0.9,
  },
  description: {
    opacity: 0.8,
    width: "90%",
    marginTop: theme.spacing(10),
  },
  image: {
    marginLeft: theme.spacing(10),
  },
  bodies:{
      marginTop:theme.spacing(20)
  }
}));
function More() {
  const classes = useStyles();

  return (
  <div className={classes.root}>
      <div className={classes.root2}>
        <div className={classes.body}>
          <Typography className={classes.head} variant="h6">
            Oh wait, there's more…
          </Typography>
        </div>
      </div>
      <div className={classes.bodies}>
        <img className={classes.image} src={recordPhone} alt="Record Phone" />
        <div className={classes.body2}>
          <Typography className={classes.heady} variant="h5">
            Record with the best of Google.
          </Typography>
          <Typography className={classes.description} variant="body1">
            Automatically transcribe speech and search recordings.<sup>6</sup>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default More;
