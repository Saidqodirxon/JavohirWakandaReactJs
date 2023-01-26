import React from "react";
import "../Section/Section.css";
import showcase from "/images/showcase.png";
function Showcase() {
  return (
    <section id="showcase">
      <div className="container d-flex">
        <div className="portion">
          <h1>Recruit top talented freelancer for your business</h1>

          <p>
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </p>
          <a href="#" id="btn">
            Get started
          </a>
        </div>
        <div className="portion">
          <img src={showcase} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Showcase;
