import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import blackMobile from "../Images/Image (6).jpg";
import whiteMobile from "../Images/Image (40).JPG";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    backgroundColor: "lightgrey",
    padding:theme.spacing(2)
  },
  body: {
    width: "100%",
    padding: theme.spacing(13),
    textAlign: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: "2.5vw",
    opacity: 0.9,
  },
  whiteMobile: {
    height: "20vw",
    marginTop: theme.spacing(-10),
    transform: "translateX(50%)",
    width: "10vw",
  },
  blackMobile: {
    marginTop: theme.spacing(-10),
    height: "20vw",
    width: "10vw",

    transform: "translateX(50%)",
  },
  left: {
    height: "100%",
    width: "20vw",
  },
  right: {
    height: "100%",
    width: "20vw",
  },
  title: {
    marginTop: theme.spacing(4),
    fontWeight: "bolder",
    textAlign: "center",
    opacity:0.9
  },
  rounds: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
  },
  blackRound: {
    backgroundColor: "black",
    width: "1vw",
    height: "1vw",
    borderRadius: "50%",
  },
  whiteRound: {
    backgroundColor: "white",
    width: "1vw",
    height: "1vw",
    borderRadius: "50%",
    border: "1px black solid",
  },
  description:{
    textAlign:"center",
    opacity:0.8
  },
  features:{
    padding:theme.spacing(2)
  }
}));
function Pixel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Typography className={classes.head} variant="h5">
          Which Pixel is right for you?
        </Typography>
      </div>
      <div>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={8}>
              <Grid item>
                <Paper className={classes.left} sx={{ height: 140, width: 90 }}>
                  <img
                    className={classes.blackMobile}
                    src={blackMobile}
                    alt="Black Mobile"
                  />
                  <Typography className={classes.title} variant="h6">
                    Pixel 4a
                  </Typography>
                  <div className={classes.rounds}>
                    <canvas className={classes.blackRound}></canvas>
                  </div>
                  <hr />
                  <div className={classes.features}>
                    <Typography className={classes.title} variant="h6">
                      Display
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >Fullscreen 147.6 mm/5.81" display with transmissive hole</Typography>
                    <Typography className={classes.title} variant="h6">
                    Memory and storage
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >6 GB RAM
                    128 GB storage*</Typography>
                    <Typography className={classes.title} variant="h6">
                    Processors
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >Qualcomm® Snapdragon™ 730G
                    with Octa-core††
                    Titan M</Typography>
                    <Typography className={classes.title} variant="h6">
                    Rear camera
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >12.2 MP dual-pixel</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  className={classes.right}
                  sx={{ height: 140, width: 90 }}
                >
                  <img
                    className={classes.whiteMobile}
                    src={whiteMobile}
                    alt="White Mobile"
                  />
                  <Typography className={classes.title} variant="h6">
                    Pixel 3a
                  </Typography>
                  <div className={classes.rounds}>
                    <canvas className={classes.blackRound}></canvas>
                    <canvas className={classes.whiteRound}></canvas>
                  </div>
                  <hr />
                  <div className={classes.features}>
                    <Typography className={classes.title} variant="h6">
                      Display
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >Fullscreen 142.2 mm/5.6" almond display</Typography>
                    <Typography className={classes.title} variant="h6">
                    Memory and storage
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >4 GB RAM
                    64 GB storage*</Typography>
                    <Typography className={classes.title} variant="h6">
                    Processors
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >Qualcomm® Snapdragon™ 670
                    with Octa-core††
                    Titan M</Typography>
                    <Typography className={classes.title} variant="h6">
                    Rear camera
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="body1"
                    >12.2 MP dual-pixel rear camera</Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{marginLeft:"45%",marginTop:"10px"}}>
      <button className="btn btn-outline-primary">Compare All</button>
      </div>
    </div>
  );
}

export default Pixel;
