import React from "react";
import "../App.css";
import Battery from "./Battery";
import Charging from "./Charging";
import Features from "./Features";
import Footer from "./Footer";
import GoogleAssistant from "./GoogleAssistant";
import Home from "./Home";
import ImagePotrait from "./ImagePotrait";
import ImageQuality from "./ImageQuality";
import ImageShot from "./ImageShot";
import ImageSlider from "./ImageSlider";
import More from "./More";
import Pixel from "./Pixel";
import RestAssure from "./RestAssure";
import Terms from "./Terms";
import Update from "./Update";
import Video from "./Video";
function Head() {
  return (
    <div>
      {/* <GoogleAppBar/> */}
      <Home/>
      <Features/>
      <ImageQuality/>
      <ImageShot/>
      <ImagePotrait/>
      <Video/>
      <Battery/>
      <Charging/>
      <GoogleAssistant/>
      <More/>
      <RestAssure/>
      <ImageSlider/>
      <Pixel/>
      <Update/>
      <Terms/>
      <Footer/>
    </div>
  );
}

export default Head;
