import React, { useRef, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import mobilePhone from "../Images/Image (6).jpg";
import charger from "../Images/Image (9).jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(20),
    display: "flex",
  },
  head: {
    transform: "translateX(50%)",
    fontWeight: "bold",
    opacity: 0.9,
    width: "50%",
  },
  box: {
    width: "70%",
  },
  description: {
    marginTop: theme.spacing(5),
    opacity: 0.9,
  },
  body: {
    width: "30%",
    padding: theme.spacing(13),
  },
  head2: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  round: {
    backgroundColor: "red",
    height: "30vw",
    width: "30vw",
    borderRadius: "50%",
    marginLeft: theme.spacing(30),
    transition:"all 0.3s ease",
    transform: "translateX(50%)",
    overflow:'hidden',
    
  },
  roundGreen: {
    marginTop:"-30vw",
    zIndex:-1,
    position:'relative',
    backgroundColor: "green",
    height: "30vw",
    width: "30vw",
    borderRadius: "50%",
    marginLeft: theme.spacing(30),
    transform: "translateX(50%) scale(0)",
    overflow:'hidden',
    transition:"all 0.3s ease",

  },
  image: {
    marginTop: "-550px",
    height: "35vw",
    width: "17vw",
    zIndex:99,
    position:'relative',
  },
  cable: {
    zIndex: 9,
    position: "relative",
    marginTop: "-17px",
    paddingTop: "200px",
    height: "35vw",
    width: "17vw",
  },
}));
function Charging() {
  const classes = useStyles();
  const divRef = useRef(null);
  const roundRef = useRef(null);

  const imageRef = useRef(null);
  const cableRef = useRef(null);
  const plugRef = useRef(null);
  const scrollListener = (e) => {
    // let imageViewPoint = imageRef.current.offsetTop-window.screen.height+100;
    let divY = divRef.current.offsetTop - 580;
    let divYC = divRef.current.offsetTop - 300;
    let y = window.scrollY;
    if (y >= divY) {
      let f = y - divY - 550;
      if (f < -250) {
        // console.log("increasing :",f);
        imageRef.current.style.marginTop = `${f}px`;
      }
      else{
        imageRef.current.style.marginTop = `-250px`;

      }

      // if(mt<=h){
      //   blueDivRef.current.style.marginTop=`${mt*-1}px`
      // }
      // else{
      // console.log(f,y,divY);
      //     imageRef.current.style.marginTop=`${f}px`
      //   }
    } else {
      imageRef.current.style.marginTop = "-550px";
    }
    if (y >= divYC) {
      let pt = 200 - (y - divYC);
      if (pt >= 0){
        plugRef.current.style.transform="translateX(50%) scale(0)"
        cableRef.current.style.paddingTop = `${pt}px`;
        roundRef.current.style.backgroundColor="red"
      }
      else{
        cableRef.current.style.paddingTop = `0px`;
        plugRef.current.style.transform="translateX(50%) scale(1)"
        roundRef.current.style.backgroundColor="transparent"

      } 
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);
  return (
    <div ref={divRef} className={classes.root}>
      <div className={classes.box}>
        <div className={classes.round} ref={roundRef} >
          <img
            ref={imageRef}
            className={classes.image}
            src={mobilePhone}
            alt="Mobile Phone"
          />
          <img
            ref={cableRef}
            className={classes.cable}
            src={charger}
            alt="Charger"
          />
        </div>
          <div ref={plugRef} className={classes.roundGreen}></div>

      </div>
      <div className={classes.body}>
        <Typography className={classes.head2} variant="h5">
          Quick charge.
        </Typography>
        <Typography variant="body1">
          The fast-charging battery is designed to get you back to the things
          that you love as quickly as possible.<sup>5</sup>
        </Typography>
      </div>
    </div>
  );
}

export default Charging;
