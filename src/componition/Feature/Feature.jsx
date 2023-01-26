import React from "react";
import "../Feature/Feature.css";
import award from "/images/icons/award.png";
import headphones from "/images/icons/headphones.png";
import user from "/images/icons/verified_user.png";
function Feature() {
  return (
    <section id="feature">
      <div class="container">
        <h5>feature</h5>
        <h2>The benefit of using our platform</h2>
        <div class="flex">
          <article class="feature">
            <span class="icon-wraper">
              <img src={award} alt="Feature icons" class="icon" />
            </span>
            <h3>Professional & Fast</h3>
            <p>
              Search and hire the most talented freelancers to match your needs.
              No matter what you need done, we've got the perfect freelancer for
              you.
            </p>
          </article>
          <article class="feature">
            <span class="icon-wraper">
              <img src={headphones} alt="Feature icons" class="icon" />
            </span>
            <h3>24/7 support</h3>
            <p>
              You have any concerns or questions? Don’t worry, we have our
              support team to help you at anytime and anywhere.
            </p>
          </article>
          <article class="feature">
            <span class="icon-wraper">
              <img src={user} alt="Feature icons" class="icon" />
            </span>
            <h3>Safe & Secure</h3>
            <p>
              We know that safety is the most important thing for our customer,
              so all of our payments are processed instantly and securely.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Feature;
