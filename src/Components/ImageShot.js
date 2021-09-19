import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import galaxy from "../Images/Image (28).jpg";
import violenGuy from "../Images/Image (2).jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    display: "flex",
  },
  body: {
    width: "100%",
    padding: theme.spacing(10),
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  imageDiv: {
    marginLeft: theme.spacing(20),
  },
  image: {
    height: "0",
    width: "36vw",
    transition:"all 0.5s ease"
  },
  imageScroll:{
    height: "55vw",
    width: "36vw",
    transition:"all 0.5s ease",
    backgroundColor:"blue"
  },
  leftImage: {
    marginLeft: theme.spacing(10),
    height: "0",
    width: "25vw",
    transition:"all 0.5s ease",
  },
  leftImageScroll: {
    marginLeft: theme.spacing(10),
    height: "30vw",
    width: "25vw",
    transition:"all 0.5s ease",
    backgroundColor:"blue"
  },
  cosmo:{
      marginTop:theme.spacing(2),
    fontWeight: "bold",
    fontSize: "1.3vw",
    opacity: 0.9,
    textAlign:"center"
  },
}));
function ImageShot() {
  const classes = useStyles();
  const [scroll,setScroll]=useState(false);
  
  const imageRef = useRef(null);
  const scrollListener = (e) => {
    let divY = imageRef.current.offsetTop-300;
    let divH = imageRef.current.offsetHeight;
    if (divY <= window.scrollY && divY +divH >= window.scrollY) {
        setScroll(true);
    }
    else{
        setScroll(false);
    }
    
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);
  return (
    <div ref={imageRef} className={classes.root}>
        <div className={classes.imageDiv}>
          <canvas className={scroll?classes.image:classes.imageScroll}></canvas>
        <img  className={!scroll?classes.image:classes.imageScroll} src={galaxy} alt="Galaxy" />
        <div className={classes.cosmo}>
    <Typography className={classes.cosmo} variant="h5">
    Capture the cosmos.
        </Typography>
        <Typography variant="body1">The camera that can take photos of the Milky Way.<sup>3</sup></Typography>
</div>
      </div>
      <div>
        <div className={classes.body}>
          <Typography className={classes.head} variant="h5">
            Get the shot without the flash.
          </Typography>
          <Typography variant="body1">
            Take clear pictures in low light with Night Sight.
          </Typography>
        </div>
        <div>
          <canvas className={scroll?classes.leftImage:classes.leftImageScroll}></canvas>
          <img
            className={!scroll?classes.leftImage:classes.leftImageScroll}
            src={violenGuy}
            alt="Violen Guy"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageShot;
