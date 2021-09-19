import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import assistant from "../Images/Image (35).jpg";
import newAssistant from "../Images/Image (34).JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    display: "flex",
  },
  body: {
    textAlign: "center",
    width: "90%",
    padding: theme.spacing(20),
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  imageDiv: {
    marginRight: theme.spacing(15),
  },
  image: {
    height: "40vw",
    width: "35vw",
    transition: "all 0.5s ease",
    position: "relative",
    display: "none",
  },
  imageScroll: {
    height: "40vw",
    width: "35vw",
    transition: "all 0.5s ease",
    position: "relative",
  },
}));
function GoogleAssistant() {
  const classes = useStyles();
  const imageRef=useRef(null)
  const [current, setCurrent] = useState(true);
  const swapImage = () => {
    
    imageRef.current.style.opacity="0"
    setTimeout(() => {
      imageRef.current.style.opacity="1"
      setCurrent((c) => !c);
    }, 150);
  };
  useEffect(() => {
    let interval=setInterval(swapImage, 5000);
    return ()=>{
      clearInterval(interval)
    }
  }, []);
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.body}>
          <Typography className={classes.head} variant="h5">
            Meet the new Google Assistant.
          </Typography>
          <Typography variant="body1">
            Use the new Google Assistant to control your phone and apps, send
            texts, multitask on the go and more.1 Meet the new Google Assistant.<sup>1</sup>
          </Typography>
        </div>
      </div>
      <div className={classes.imageDiv}>
        <img
        ref={imageRef}
          className={classes.imageScroll}
          src={current ? newAssistant : assistant}
          alt="New Assistant"
        />
        {/* <img  className={!current?classes.imageScroll:classes.image} src={assistant} alt="Assistant" /> */}
      </div>
    </div>
  );
}

export default GoogleAssistant;
