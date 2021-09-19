import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import girlStanding from "../Images/Image (8).jpg";
import babyStanding from "../Images/Image (1).jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    display:"flex"
  },
  body: {
    width:"90%",
    padding: theme.spacing(13),
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  imageDiv:{
    marginRight:theme.spacing(15)
  },
  image: {
    height:"0",
    width:"35vw",
    transition:"all 0.5s ease"
    },
    imageScroll:{
      height:"50vw",
    width:"35vw",
    transition:"all 0.5s ease",
    backgroundColor:"green",
    },
  leftImage: {
    marginLeft:theme.spacing(25),
    backgroundColor:"green",
    height:"0",
    width:"22vw",
    
    transition:"all 0.5s ease",
  },
  leftImageScroll:{
    opacity:1,
    marginLeft:theme.spacing(25),
    height:"30vw",
    width:"22vw",
    transition:"all 0.5s ease",
    backgroundColor:"green",
    },
}));
function ImageQuality() {
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
      <div>
        <div className={classes.body}>
          <Typography className={classes.head} variant="h5">
            Top-notch photos. Taken up a notch.
          </Typography>
          <Typography variant="body1">
            HDR+ makes your photos look even better by automatically adjusting
            the colour and lighting.
          </Typography>
        </div>

        <div style={{marginTop:'10px'}}>
          <canvas className={scroll?classes.leftImage:classes.leftImageScroll}></canvas>
          {/* <img src={girlStanding} className={scroll?classes.leftImageScroll:classes.leftImage} alt="Girl Standing"/> */}
          <img className={!scroll?classes.leftImage:classes.leftImageScroll} src={babyStanding} alt="Baby Standing" />
        </div>
      </div>
      <div className={classes.imageDiv}>
      <canvas className={scroll?classes.image:classes.imageScroll}></canvas>
        <img  className={!scroll?classes.image:classes.imageScroll} src={girlStanding} alt="Girl Standing" />
      </div>
    </div>
  );
}

export default ImageQuality;
