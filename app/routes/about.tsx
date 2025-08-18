import { useEffect, useState, useRef } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import bg from "~/../public/img/bg.jpg";
import bg1 from "~/../public/img/bg1.jpg";
import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";


export default function Index() {
    useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="content-aboutus1">
      <div className="logo">
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content-aboutus2">
        <h2><span>Staying informed is hard.</span> We make it easy.</h2>
        <p>Jeffamzn is a daily newsletter for go-getters who like to stay informed about the business world.</p>
      </div>
      <div className="content-aboutus3">
      <div className="header">
        <h4>GETTING STARTED</h4>
        <h3>Start your journey with Jeffamzn.</h3>
      </div>
              <div className="grid">
          <div className="box">
            <img src={bg} alt="Sign up free" />
            <h1>Sign up for free</h1>
            <p>
              Sign up for free to get the business world delivered straight to your inbox every day of the week.
            </p>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Sign up</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
      </div>
      <div className="box">
        <img src={bg1} />
        <h1>Advertise with us</h1>
        <p>Jeffamzn helps you diversify your brand by placing your content where people do business — the email inbox. <br /><br />Get started today by promoting just one of your existing LinkedIn, Instagram, Facebook, or X posts.</p>
        <a href="mailto:hey@jeffamzn.com" className="pricebtn">
            Start a campaign
        </a>
      </div>
      </div>
      </div>

  <div className="footer">
    <div className="footer-top">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
        <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <div className="input-wrapper">
            <input className="email" type="email" name="email" required placeholder="Email Address *" />
            <button className="submit" type="submit">Sign up</button>
          </div>
          <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
          <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
          <input type="hidden" name="nonce" />
        </form>
      </div>
      
      <div className="footer-links">
        <div className="column">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="/ads/advertise-with-us">Advertise With Us</Link>
        </div>
        <div className="column">
          <h4>Support</h4>
          <a href="mailto:hey@jeffamzn.com">Contact</a>
          <a href="mailto:press@jeffamzn.com">Press</a>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-meta">
      <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
      <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>
      </div>
      <div className="footer-social">
      <a href="https://instagram.com/jeffamzn" target="_blank" rel="noopener noreferrer">
        <img src={ig} alt="Instagram" />
      </a>
      <a href="https://x.com/jeffamzn" target="_blank" rel="noopener noreferrer">
        <img src={x} alt="X (formerly Twitter)" />
      </a>
      <a href="https://linkedin.com/company/jeffamzn" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="mailto:hey@jeffamzn.com">
        <img src={email} alt="Email us" />
      </a>
  
      </div>
  </div>
  </div>
  </div>
  );
}