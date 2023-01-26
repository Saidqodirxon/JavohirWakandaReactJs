import React from "react";
import "../Icons/Icons.css";
import airbnb from "/images/icons/airbnb.png";
import google from "/images/icons/google.png";
import slack from "/images/icons/slack.png";
import netflix from "/images/icons/netflix.png";
import amazon from "/images/icons/amazon.png";

function Icons() {
  return (
    <section id="icons">
      <div class="container flex">
        <img src={airbnb} alt="Partner" />
        <img src={google} alt="Partner" />
        <img src={slack} alt="Partner" />
        <img src={netflix} alt="Partner" />
        <img src={amazon} alt="Partner" />
      </div>
    </section>
  );
}
export default Icons;
