import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import snapVideo from "../Images/video.mp4";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    display: "flex",
  },
  body: {
    width: "50%",
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(20),
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  imageDiv: {
    marginLeft: theme.spacing(10),
  },
  // video: {
  //   width: "33vw",
  //   height: "0",
  //   transition: "all 0.5s ease",
  // },
  videoScroll: {
    width: "33vw",
    height: "40vw",
    transition: "all 0.5s ease",
    // backgroundColor: "pink",
  },
}));

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const scrollListener = (e) => {
    let divY = videoRef.current.offsetTop - 300;
    let divH = videoRef.current.offsetHeight;
    if (divY <= window.scrollY && divY + divH >= window.scrollY) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);
  const classes = useStyles();
  return (
    <div ref={videoRef} className={classes.root}>
      <div className={classes.imageDiv}>
        {/* <canvas className={play ? classes.video : classes.videoScroll}></canvas> */}
        <ReactPlayer
          url={snapVideo}
          playing={play}
          className={classes.videoScroll}
        />
      </div>
      <div>
        <div className={classes.body}>
          <Typography className={classes.head} variant="h5">
            Share in a snap.
          </Typography>
          <Typography variant="body1">
            Send photos directly from the viewfinder of your Pixel camera to
            your favourite Google and third-party social apps.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Video;
