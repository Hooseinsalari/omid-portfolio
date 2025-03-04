import React from "react";
import HomeHero from "./components/HomeHero";
import HomeContact from "./components/HomeContact";
import HomeShowcaseWork from "./components/HomeShowcaseWork";

function ViewHome() {
  return (
    <div>
      <HomeHero />
      <HomeContact />
      <HomeShowcaseWork />
    </div>
  );
}

export default ViewHome;
