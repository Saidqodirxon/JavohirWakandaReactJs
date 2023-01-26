import React from "react";
import "../Footer/Footer.css";
import wakanda from "/images/wakanda.png";
import instagram from "/images/icons/insagram.png";
import global from "/images/icons/global.png";
import twitter from "/images/icons/twitter.png";
import youtube from "/images/icons/youtube.png";
function Footer() {
  return (
    <footer id="the-end">
      <div class="container flex">
        <div class="athird">
          <div class="logo">
            <img src={wakanda} alt="LOGO" />
          </div>

          <nav class="socials">
            <ul class="flex">
              <li>
                <a href="#">
                  <img src={instagram} alt="social link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={global} alt="social link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="social link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="social link" />
                </a>
              </li>
            </ul>
          </nav>
          <p>Copyright © 2022 Wakanda. All rights reserved</p>
        </div>
        <div class="portion">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">For freelancers</a>
            </li>
          </ul>
        </div>
        <div class="portion">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">For freelancers</a>
            </li>
          </ul>
        </div>
        <div class="aquater">
          <h2>Subscribe to our newsletter</h2>
          <form action="/newsletter">
            <div class="input-wrapper">
              <input
                type="email"
                placeholder="Your email address"
                name="email"
              />
              <button type="submit">
                <a href="#">🔝</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
