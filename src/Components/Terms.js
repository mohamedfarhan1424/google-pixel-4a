import {
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  description: {
    opacity: 0.7,
    padding: theme.spacing(1),
    fontSize: "0.8vw",
  },
  body: {
    display: "flex",
    float: "right",
  },
  link: {
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  },
}));
function Terms() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography className={classes.description} variant="body1">
          <sup>1</sup>
          English only. See <a href="/#">g.co/pixelassistant/languages</a> for
          country and language availability, as well as Google Account
          requirements.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>2</sup> Android version updates for at least 3 years from when
          the device first became available on the Google Store in the US. See
          <a href="/#">g.co/pixel/updates</a> for details.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>3</sup> See <a href="/#">g.co/pixel/astrophotography</a> to learn
          more about astrophotography on Pixel 4a.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>4</sup>Approximate battery life is based on a mix of talk, data,
          standby and use of other features, with always-on display off. An
          active display and other usage factors will decrease battery life.
          Pixel 4a battery testing conducted in Mountain View, CA, USA in early
          2020 on pre-production hardware and software. Actual results may vary.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>5</sup> Charging rates are based on use of the included charger
          plugged into a wall socket. Actual results may vary.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>6</sup> Transcription and search are available in English only.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>7</sup> Android version updates for at least 3 years from when
          the device first became available on the Google Store in the US. See{" "}
          <a href="/#">g.co/pixel/updates</a> for details.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>8</sup> For eligible Google One plans in limited countries.{" "}
          <a href="/#">Restrictions apply</a>.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>9</sup> Storage specifications refer to capacity before
          formatting. Actual formatted capacity will be less.
        </Typography>
        <Typography className={classes.description} variant="body1">
          <sup>10</sup> Qualcomm is a trademark of Qualcomm Incorporated,
          registered in the United States and other countries, used with
          permission.
        </Typography>
      </div>
      <div className={classes.body}>
        <div>
          <p className={classes.link}>Country Availablity</p>
        </div>
        <div>
          <p className={classes.link}>Help Centre</p>
          <p className={classes.link}>Contact Us</p>
          <p className={classes.link}>Device Recycling</p>
        </div>
      </div>
      
    </div>
  );
}

export default Terms;
