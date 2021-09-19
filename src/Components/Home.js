import { faMobile, faMobileAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, Typography,Button } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import dualMobileImg from '../Images/Image (2).png'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  belowButton: {
      textDecoration:'none',
      "&:hover":{
          textDecoration:'underline'
      },
      color:'#2196f3',
  },
  icon:{
      color:'#2196f3',
  },
  head:{
    transform:'translateX(50%)',
    fontWeight:'bold',
    opacity:.9,
    width:"50%",
    transition:"all 0.5s ease"
  }

}));
function Home() {
  const classes = useStyles();
  const textRef=useRef(null);
  const divRef=useRef(null);
  const scrollListener = (e) => {
    let divY = divRef.current.offsetTop-150;
    let divH = divRef.current.offsetHeight;
    if (divY <= window.scrollY && divY +divH >= window.scrollY) {
        textRef.current.style.opacity="0.9"
    }
    else{
      textRef.current.style.opacity="0"
    }
    
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);
  return (
    <div ref={divRef} className={classes.root}>
      <Typography ref={textRef} className={classes.head}   variant="h2">
        Great help at your fingertips.
      </Typography>
      {/* <Button variant="outlined" color="primary">Find Retailers</Button> */}
      <div className={classes.button}>
        <button className="btn btn-outline-primary">Find Retailers</button>
      </div>
      <div>
          <img src={dualMobileImg} alt="doublephone"/>
      </div>
      <div>
          <FontAwesomeIcon className={classes.icon} icon={faPlay}></FontAwesomeIcon>
          <Button className={classes.belowButton} color="primary">watch a video</Button>
          <FontAwesomeIcon className={classes.icon} icon={faMobile}></FontAwesomeIcon>
          <FontAwesomeIcon className={classes.icon} icon={faMobileAlt}></FontAwesomeIcon>
          <Button className={classes.belowButton} color="primary">compare phones</Button>
      </div>
    </div>
  );
}

export default Home;
