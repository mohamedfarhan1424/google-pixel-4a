import {  makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import frontTop from "../Images/Image (23).jpg";
import back from "../Images/Image (19).jpg";
import side from "../Images/Image (25).jpg";
import backTop from "../Images/Image (26).jpg";
import front from "../Images/Image (22).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "75% 25%",
  },
  out: {
    color: "white",
    display: "grid",
    gridTemplateColumns: "20% 80%",
    backgroundColor: "rgba(0,0,0,0.82)",
  },
  imageView: {
    width: "50vw",
    height: "50vw",
    float: "right",
    transition:'all 1s ease'
},
content: {
    textAlign: "center",
    transform: "translateY(50%)",
},
imageSlider: {
    width: "17vw",
    height: "25vw",
    cursor: "pointer",
    transition:'all 1s ease',
    backgroundColor: "rgba(0,0,0,0.82)",
  },
  box: {
    padding: theme.spacing(5),
    paddingTop: "40%",
  },
  button: {
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
  },
  slide: {
    display: "grid",
    gridTemplateColumns: "40% 60%",
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    paddingLeft: theme.spacing(3),
  },
  count: {
    textAlign: "center",
    fontWeight: "bolder",
    paddingTop: theme.spacing(1),
  },
}));
function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const classes = useStyles();
  const imageViewRef=useRef(null)
  const imageSlideRef=useRef(null)
  let images = [frontTop, back, side, backTop, front];
  const imageSlide = (i) => {
      imageViewRef.current.style.transform='scaleX(0)'
      imageViewRef.current.style.opacity='0'
      imageSlideRef.current.style.transform='scaleX(0)'
      imageSlideRef.current.style.opacity='0'
      setTimeout(() => {
          imageViewRef.current.style.transform="scaleX(1)"
          imageViewRef.current.style.opacity='1'
          imageSlideRef.current.style.transform="scaleX(1)"
          imageSlideRef.current.style.opacity='1'
          setCurrent((p) => {
          if (p + i < 0) {
            return images.length - 1;
          } else if (p + i === images.length) {
            return 0;
          }
          return p + i;
        });
        
      }, 500);
  };
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.out}>
          <div className={classes.content}>
            <h3>Just Black</h3>
            <button className="btn btn-primary btn-lg">Find Retailers</button>
          </div>
          <div>
            <img
            ref={imageViewRef}
              className={classes.imageView}
              src={images[current]}
              alt="mobile"
            />
          </div>
        </div>

        <div className={classes.images}>
          <div className={classes.box}>
              <div style={{backgroundColor:'rgba(0,0,0,0.82)'}}>

            <img
            ref={imageSlideRef}
              onClick={() => imageSlide(1)}
              className={classes.imageSlider}
              src={images[current + 1 === images.length ? 0 : current + 1]}
              alt="mobile"
            />
              </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.icons}>
              <div className={classes.button} onClick={() => imageSlide(-1)}>
                <FontAwesomeIcon
                  style={{ transform: "translate(130%,50%)" }}
                  icon={faChevronLeft}
                ></FontAwesomeIcon>
              </div>
              <div className={classes.button} onClick={() => imageSlide(1)}>
                <FontAwesomeIcon
                  style={{ transform: "translate(130%,50%)" }}
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className={classes.count}>
              {current + 1}/{images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
