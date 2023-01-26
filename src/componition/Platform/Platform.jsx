import React from "react";
import contact from "/images/contact.png";
function Platform() {
  return (
    <section id="steps">
      <div class="container flex">
        <div class="portion">
          <img src={contact} alt="Window" />
        </div>
        <div class="portion" id="portion">
          <h2>Wakanda is an easy platform to find talent</h2>
          <ol>
            <li>
              <span class="counter">1</span>Lorem ipsum dolor sit amet.
            </li>
            <li>
              <span class="counter">2</span>Atque ipsa a non aspernatur.
            </li>
            <li>
              <span class="counter">3</span>Voluptas quidem porro a omnis.
            </li>
            <li>
              <span class="counter">4</span>Porro tenetur dolorem architecto
              inventore?
            </li>
            <li>
              <span class="counter">5</span>Laborum voluptatibus cupiditate
              fugiat fugit?
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
export default Platform;
