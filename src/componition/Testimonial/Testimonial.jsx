import React from "react";
import "../Testimonial/Testimonial.css";
import star from "/images/icons/star.png";
import avatar from "/images/icons/Avatar.png";
function Testimonial() {
  return (
    <section id="testimonials">
      <h5>testimonial</h5>
      <h2>See what they're saying about us</h2>
      <div class="container flex">
        <div class="portion">
          <article>
            <div class="flex">
              <img src={avatar} alt="User image" />
              <div>
                <h4>Cara Bedford</h4>
                <div class="flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </article>
          <article>
            <div class="flex">
              <img src={avatar} />
              <div>
                <h4>Cara Bedford</h4>
                <div class="flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </article>
        </div>
        <div class="portion">
          <article>
            <div class="flex">
              <img src={avatar} />
              <div>
                <h4>Cara Bedford</h4>
                <div class="flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
            </p>
          </article>
          <article>
            <div class="flex">
              <img src={avatar} />
              <div>
                <h4>Cara Bedford</h4>
                <div class="flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it! The quality of
              freelancers on this site is very high and they're totally
              reliable. I would highly recommend it!
            </p>
          </article>
        </div>
        <div class="portion">
          <article>
            <div class="flex">
              <img src={avatar} />
              <div>
                <h4>Cara Bedford</h4>
                <div class="flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </article>
          <article>
            <div class="flex">
              <img src={avatar} />
              <div>
                <h4>Cara Bedford</h4>
                <div class="flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
