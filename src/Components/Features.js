import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { androidBattery, camera, DownArrow, googleAssistant, shield } from "./Icons/SvgIcons";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(15),
  },
  title:{
    fontWeight: "bold",
    opacity: 0.9,
    padding:"1% 20%",
    fontSize:"1.7vw",
  },
  head: {
      transform:'translateX(50%)',
    fontWeight: "bold",
    fontSize:"3vw",
    opacity: 0.9,
    width:'50%'
  },
  description:{
      opacity:.9
  },
  feature: {
    width: "100%",
    height:"100%",
  },
  contents:{
      display:"flex",
      marginTop:theme.spacing(5),
      justifyContent:"space-between",
      alignContent:"center",
      paddingLeft:100,
      paddingRight:100
  }
}));
function Features() {
  const classes = useStyles();
  const contents = [
    {
      icon: camera,
      title: "Take photos like a pro.",
      description:
        "With features like HDR+, Night Sight, and more, the Pixel 4a camera takes incredible photos.",
    },
    {
      icon: androidBattery,
      title: "Charge less. Live more.",
      description:
        "The Adaptive Battery learns from your favourite apps and reduces power to the ones that you rarely use.",
    },
    {
      icon:googleAssistant,
      title: "Get help on the go.",
      description:
        "Google Assistant helps you control apps, send texts and more.",
        sup:1,

    },
    {
      icon:shield,
      title: "Peace of mind built in.",
      description:
        "Three years of updates and the Titan M chip ensure that you’re secure.",
        sup:2,
    },
  ];
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.head}>
        Packed with all the things you want most in a phone.
      </Typography>
      <div className={classes.contents}>
      {contents.map((feature,key) => {
        return <Feature key={key} feature={feature} />;
      })}
      </div>
    </div>
  );
}

export default Features;

function Feature({ feature }) {
  const { icon, title, description,sup } = feature;
  const classes = useStyles();
  return (
      <div>
    <div className={classes.feature}>
        {icon()}
      <Typography className={classes.title} variant="h5">{title}</Typography>
      <Typography variant="body1" className={classes.description}>{description}<sup>{sup}</sup></Typography>
    </div>
    <div><DownArrow/></div>
    </div>
  );
}
