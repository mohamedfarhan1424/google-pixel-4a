import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button } from "@material-ui/core";
import Head from "./Head";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonRight: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    fontSize: 20,
  },
  mainTitle: {
    marginRight: theme.spacing(2),
  },
  buttonGroup: {
    flexGrow: 1,
  },
  dropButtonActive: {
    borderRadius: 20,
    border: 0,
    textTransform: "capitalize",
    boxShadow: "0 1px 3px 1px rgba(0,0, 0, .1)",
    fontSize: 12,
  },
  dropButton: {
    border: 0,
    borderRadius: 20,
    fontSize: 12,
    textTransform: "capitalize",
    opacity: 0.7,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function GoogleAppBar() {
  const classes = useStyles();
  const [elev, setElev] = useState(0);
  const appBarRef = useRef();
  const scrollListener = (e) => {
    let divY = appBarRef.current.offsetTop;
    let divH = appBarRef.current.offsetHeight;
    if (divY <= window.scrollY && divY + divH >= window.scrollY) {
      setElev(4);
    } else {
      setElev(0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  });
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://img.icons8.com/color/25/000000/google-logo.png"
              alt="google logo"
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Google Store
          </Typography>
          <div>
            <FontAwesomeIcon
              className={classes.menuButtonRight}
              icon={faSearch}
            />
            <FontAwesomeIcon
              className={classes.menuButtonRight}
              icon={faQuestionCircle}
            />
            <FontAwesomeIcon
              className={classes.menuButtonRight}
              icon={faShoppingCart}
            />
            <Avatar style={{ float: "right" }}>F</Avatar>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar
        ref={appBarRef}
        color="inherit"
        position="sticky"
        elevation={elev}
      >
        <Toolbar>
          <Typography variant="h5" className={classes.mainTitle}>
            <b>Google Pixel 4a</b>
          </Typography>
          <div className={classes.buttonGroup}>
            <Button
              className={classes.dropButtonActive}
              elevation={1}
              variant="outlined"
              color="inherit"
            >
              overview
            </Button>
            <Button
              className={classes.dropButton}
              variant="outlined"
              color="inherit"
            >
              tech specs
            </Button>
            <Button
              className={classes.dropButton}
              variant="outlined"
              color="inherit"
            >
              compare
            </Button>
          </div>
          <button className="btn btn-primary btn-lg">Find Retailers</button>
        </Toolbar>
      </AppBar>
      <Head />
      {/* <div style={{backgroundColor:"black",height:'1080px'}}></div> */}
    </div>
  );
}
