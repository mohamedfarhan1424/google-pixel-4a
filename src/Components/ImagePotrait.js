import { makeStyles, Slider, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import chinGuy from "../Images/Image (5).jpg";
import blurMan1 from "../Images/New folder/1st.jpg";
import blurMan2 from "../Images/New folder/2nd.jpg";
import blurMan3 from "../Images/New folder/3rd.jpg";
import blurMan4 from "../Images/New folder/4th.jpg";
import blurMan5 from "../Images/New folder/5th.jpg";
import blurMan6 from "../Images/New folder/6th.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    display: "flex",
  },
  body: {
    width: "90%",
    padding: theme.spacing(13),
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  imageDiv: {
    marginRight: theme.spacing(15),
  },
  blur: {
    textAlign: "center",
    width:"50%",
    marginLeft: theme.spacing(20)
  },
  image: {
    height: "0",
    width: "35vw",
    transition:"all 0.5s ease"
  },
  imageScroll: {
    height: "50vw",
    width: "35vw",
    transition:"all 0.5s ease",
    backgroundColor:"yellow"
  },
  leftImage: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(25),
    height: "0",
    width: "22vw",
    transition:"all 0.5s ease"
  },
  leftImageScroll: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(25),
    height: "30vw",
    width: "22vw",
    transition:"all 0.5s ease",
    backgroundColor:"yellow"
  },
  blurHead:{
    fontWeight: "bold",
    fontSize: "1.3vw",
    opacity: 0.9,
    textAlign:"center"
  }
}));
function ImagePotrait() {
  const classes = useStyles();
  
  const [source, setSource] = useState(blurMan1);
  const [range, setRange] = useState(0);
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
  const handleBlur = () => {
    if (range === 0) {
      setSource(blurMan1);
    } else if (range <= 20) {
      setSource(blurMan2);
    } else if (range <= 40) {
      setSource(blurMan3);
    } else if (range <= 60) {
      setSource(blurMan4);
    } else if (range <= 80) {
      setSource(blurMan5);
    } else if (range <= 100) {
      setSource(blurMan6);
    }
  };
  return (
    <div ref={imageRef} className={classes.root}>
      <div>
        <div className={classes.body}>
          <Typography className={classes.head} variant="h5">
            Portraits that look completely professional.
          </Typography>
          <Typography variant="body1">
            Focus on your subjects by adding an artistic blur to the background
            in portrait mode.
          </Typography>
        </div>
        <div>
          <canvas className={scroll?classes.leftImage:classes.leftImageScroll}></canvas>
          <img className={!scroll?classes.leftImage:classes.leftImageScroll} src={source} alt="Blur Man" />
        </div>
        <div className={classes.blur}>
          Blur:{" "}
          <Slider
        size="small"
        value={range}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={(e,newvalue) => {
          handleBlur();
          setRange(newvalue);
        }}
      />
          <Typography className={classes.blurHead} variant="h5">
          Bring the blur to more photos.
          </Typography>
          <Typography variant="body1">
          You can also add a blur effect to portraits not shot on a Pixel later with Portrait Blur in Google Photos.
          </Typography>
        </div>
      </div>
      <div className={classes.imageDiv}>
        <canvas className={scroll?classes.image:classes.imageScroll}></canvas>
        <img className={!scroll?classes.image:classes.imageScroll} src={chinGuy} alt="Chin Guy" />
      </div>
    </div>
  );
}

export default ImagePotrait;
