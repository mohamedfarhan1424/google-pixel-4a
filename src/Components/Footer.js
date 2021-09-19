import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'


const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      india: {
        marginLeft: theme.spacing(55),
        display: "flex",
      },
      title:{
          fontSize:"1vw",
          opacity:0.7,
          cursor:"pointer",
          padding:theme.spacing(1)
      }
}))
function Footer() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="inherit" position="static" elevation={4}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
              alt="Twitter Logo"
            />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"
              alt="Insta logo"
            />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"
              alt="Facebook logo"
            />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png"
              alt="Youtube logo"
            />
          </IconButton>
          <div className={classes.india}>
              <img
                src="https://img.icons8.com/color/30/000000/india.png"
                alt="India"
              />
              <Typography className={classes.title} variant="h6">India</Typography>
              <Typography className={classes.title} variant="h6">Privacy</Typography>
              <Typography className={classes.title} variant="h6">Google Next Commitment to Privacy</Typography>
              <Typography className={classes.title} variant="h6">Sales Terms</Typography>
              <Typography className={classes.title} variant="h6">Terms of Service</Typography>
          </div>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Footer
