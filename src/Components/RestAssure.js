import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import girlWithMobile from "../Images/Capture.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(30),
    backgroundColor: "#EEEDE7",
  },
  body: {
    padding: theme.spacing(10),
  },
  head: {
    transform: "translateX(50%)",
    fontWeight: "bold",
    opacity: 0.9,
    width: "50%",
  },
  description: {
    marginTop: theme.spacing(5),
    opacity: 0.8,
  },
  bodies: {
    display: "flex",
    padding: theme.spacing(5),
  },
  bodyHead: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
    marginTop:theme.spacing(10)
  },
  bodyDes: {
    padding: theme.spacing(15),
    width:"50%",
    textAlign:"left"
  },
  image:{
      width:"50%"
  }
}));
function RestAssure() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Typography className={classes.head} variant="h2">
          Rest assured.
        </Typography>
        <Typography className={classes.description} variant="body1">
          Get peace of mind knowing that your phone is working to keep you and
          your stuff safe.
        </Typography>
      </div>
      <div className={classes.bodies}>
        <img
          className={classes.image}
          src={girlWithMobile}
          alt="Girl With Mobile"
        />
        <div className={classes.bodyDes}>
          <Typography className={classes.bodyHead} variant="h5">
            Superhero-level security chip.
          </Typography>
          <Typography className={classes.description} variant="body1">
            Keep your OS and sensitive data protected with the custom Titan M
            security chip.
          </Typography>
          <Typography className={classes.bodyHead} variant="h5">
          Stay secure with guaranteed updates.
          </Typography>
          <Typography className={classes.description} variant="body1">
          Automatically receives the latest OS and security updates for at least three years.<sup>7</sup>
          </Typography>
          <a href="/#">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default RestAssure;
