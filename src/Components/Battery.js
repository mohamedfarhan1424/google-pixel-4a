import React, { useEffect, useRef} from "react";
import {  makeStyles,  Typography } from "@material-ui/core";
import mobilePhone from "../Images/Image (6).jpg";



const useStyles = makeStyles((theme) => (
  {
    bar:{
      position:'sticky',
      top:0,
      paddingTop:theme.spacing(4)

    },
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  head: {
    transform: "translateX(50%)",
    fontWeight: "bold",
    opacity: 0.9,
    width: "50%",
  },
  description: {
    marginTop: theme.spacing(5),
    opacity: 0.9,
  },
  body: {
    width: "30%",
    padding: theme.spacing(13),
    // float:"left"
  },
  head2: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  bodies: {
    display: "flex",
    marginTop: theme.spacing(15),
    paddingBottom:theme.spacing(25),
  },
  bodiesBlue: {
    display: "flex",
    backgroundColor:'violet',
    paddingBottom:theme.spacing(25),
  },
  round: {
    marginTop: `70px`,
    backgroundColor: "yellow",
    height: "30vw",
    width: "30vw",
    borderRadius: "50%",
    transform: "translateX(9%)",
  },
  roundWhite: {
    marginTop: `70px`,
    height: "30vw",
    width: "30vw",
    borderRadius: "50%",
    transform: "translateX(9%)",
  },
  image: {
    marginTop: `-70px`,
    height: "35vw",
    width: "17vw",
  },
  box: {
    height: "35vw",
    width: "35vw",
    borderRadius: "0% 0% 50% 50%",
    overflow: "hidden",
    // border:"1px solid black",
  },
}));
function Battery() {
  const classes = useStyles();
  const divRef = useRef(null);

  const imageRef = useRef(null);
  const scrollListener = (e) => {

    // let imageViewPoint = imageRef.current.offsetTop-window.screen.height+100;
    let divY = divRef.current.offsetTop+100;
    let y=window.scrollY
    if (y>=divY) {
      let f=(y-divY)-70
      imageRef.current.style.marginTop=`${f}px`
      // if(mt<=h){
      //   blueDivRef.current.style.marginTop=`${mt*-1}px`
      // }
      // else{
      //     console.log(f,y,divY);
      //     imageRef.current.style.marginTop=`${f}px`
      //   }
    }
    else{
      imageRef.current.style.marginTop='-70px'
    }
    
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  },[]);
  return (
    <div className={classes.root}>
      <Typography className={classes.head} variant="h2">
        A battery that takes you from breakfast to bed.
            
      </Typography>
      <Typography className={classes.description} variant="body2">
        More talking, streaming and selfies. And less charging.
      </Typography>
      <div className={classes.bar} ref={divRef}>
      <div className={classes.bodies}>
        <div className={classes.body}>
          <Typography className={classes.head2} variant="h5">
            All-day battery.
            <sup>
              <sup style={{ fontSize: "0.7vw" }}>4</sup>
            </sup>
          </Typography>
          <Typography variant="body1">
            Pixel 4a's Adaptive Battery learns which apps are your favourite and
            reduces power to the ones that you rarely use.
          </Typography>
        </div>
        <div className={classes.box}>
          <div className={classes.round}>
            <img
            ref={imageRef}
              className={classes.image}
              src={mobilePhone}
              alt="Mobile Phone"
            />
          </div>
        </div>
      </div>
      </div>
      <div className={classes.bodiesBlue}>
        <div className={classes.body}>
          
        </div>
        <div className={classes.box}>
          <div className={classes.roundWhite}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Battery;
