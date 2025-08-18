import { useEffect, useState, useRef } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import promoads from "~/../public/img/promoted-ads.png";
import takeoverads from "~/../public/img/takeover-ads.png";
import textads from "~/../public/img/text-ads.png";
import newads from "~/../public/img/newads.jpg";
import convertads from "~/../public/img/convertads.jpg";
import takeoverbg from "~/../public/img/takeoverbg.jpg";
import bg1 from "~/../public/img/bg.jpg";
import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";

const ads = [
  {
    image: promoads,
    title: "Promoted Ads",
    description:
      "Showcase your product or service with a single image or short gif.",
  },
  {
    image: takeoverads,
    title: "Takeover Ads",
    description:
      "Maxmize your engagement with a big image and custom CTA.",
  },
  {
    image: textads,
    title: "Text Ads",
    description:
      "A quick and easy way to promote your ideas to our readers.",
  },
];

export default function Index() {
  const [adIndex, setAdIndex] = useState(0);

  // Ads carousel handlers (unchanged)
  const next = () => setAdIndex((prev) => (prev + 1) % ads.length);
  const prev = () => setAdIndex((prev) => (prev - 1 + ads.length) % ads.length);
  
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
    <div className="content-awu">
      <div className="logo">
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content-awu2">
            <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h3>Connect with your next customers on Jeffamzn.</h3>
            </div>
            <p>Jeffamzn is one of the most engaged email audiences in the world, and we're constantly in discovery mode.</p>
      </div>
      <div className="ads-carousel">
        <button className="carousel-button prev" onClick={prev}>◀</button>
        <button className="carousel-button next" onClick={next}>▶</button>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${adIndex * 100}%)` }}
        >
          {ads.map((ad, i) => (
            <div className="carousel-slide" key={i}>
              <div className="box">
                <img src={ad.image} alt={ad.title} />
                <h1>{ad.title}</h1>
                <p>{ad.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btn">
        <a href="mailto:hey@jeffamzn.com" className="pricebtn">
            Start a campaign
      </a>
      </div>
      <div className="content-awu3">
        <div className="header">
            <h4>MOST POPULAR</h4>
            <h3>Promoted Ads.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={convertads} />
          <h1>Promote a post from social media</h1>
          <p>Have a successful post on LinkedIn, Instagram, Facebook, or X? promote it to our audience to increase your engagement.</p>
        </div>
        <div className="box">
          <img src={newads} />
          <h1>Use existing Meta and LinkedIn ads</h1>
          <p>Give your existing Instagram, Facebook, or LinkedIn ads an extra boost as Jeffamzn ads.</p>
        </div>
        </div>
      </div>
      <div className="content-awu4">
        <div className="header">
            <h4>BIGGEST VIEWS</h4>
            <h3>Takeover Ads.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={takeoverbg} />
          <h1>Takeover Ads</h1>
          <p>Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement.</p>
        </div>
        </div>
      </div>
      <div className="content-awu5">
      <div className="header">
        <h4>GETTING STARTED</h4>
        <h3>Start your journey with Jeffamzn.</h3>
      </div>
      <div className="grid">
      <div className="box">
        <img src={bg1} />
        <h1>Advertise with us</h1>
        <p>Jeffamzn helps you diversify your brand by placing your content where people do business — the email inbox.</p>
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
          <Link to="/about">About</Link>
          <a href="mailto:press@jeffamzn.com">Press</a>
          <Link to="/ads/advertise-with-us">Advertise With Us</Link>
        </div>
        <div className="column">
          <h4>Support</h4>
          <Link to="#">Sign Up</Link>
          <Link to="#">Archive</Link>
          <a href="mailto:hey@jeffamzn.com">Contact</a>
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