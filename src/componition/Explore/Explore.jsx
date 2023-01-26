import React from "react";
import "../Explore/Explore.css";
import explore from "/images/explore.png";
function Explore() {
  return (
    <section id="explore">
      <div class="container flex">
        <div class="portion">
          <h2>Explore and hire talent from our platform</h2>
          <p>
            We've got experts for every industry - all under one roof! You can
            find everything from WordPress developers to Graphic designers to
            copywriters and many more at Wakanda.
          </p>
          <a href="#" id="btn">
            Explore Now
          </a>
        </div>
        <div class="portion">
          <img src={explore} alt="explore talents" />
        </div>
      </div>
    </section>
  );
}

export default Explore;
