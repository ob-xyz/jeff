import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import sama from "~/../public/img/samae.jpg";
import tobi from "~/../public/img/tobic.jpg";
import jensen from "~/../public/img/jensene.jpg";
import trump from "~/../public/img/trump.webp";
import dd from "~/../public/img/rocket.jpg";
import handcoin from "~/../public/img/handcoin.jpg";
import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";


const rotatingWords = ["on Wall Street.", "in Silicon Valley.", "across the world."];
export default function Index() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);


  // Word rotation effect (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>JEFFAMZN</h4>
            <h1>
              Don't start your day without knowing what's happening <br />
              <span className={`${fadeOut ? "fade-out" : "fade-in"}`}>
                {rotatingWords[index]}
              </span>
            </h1>
            <p>Subscribe to stay informed.</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Subscribe</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
      </div>
      <div className="inner-content2">
        <h2>The <span>one newsletter</span> you can trust</h2>
        <Link to="#"><p>Every day of the week Jeffamzn helps you know what's really going on in the business world.</p></Link>
      </div>
      <div className="inner-content3">
        <div className="box">
          <img src={trump} />
        </div>
        <div className="box">
          <img src={handcoin} />
        </div>
        <div className="box">
          <img src={dd} />
        </div>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox daily.</h3>
            <p>Read by go-getters who make things.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={sama} />
          <h1>Go-getters who make things</h1>
          <p>Join tech execs, founders, and venture capitalists who make things.</p>
        </div>
        <div className="box">
          <img src={tobi} />
          <h1>Every story that matters</h1>
          <p>Get every business news story that matters — delivered to you.</p>
        </div>
        <div className="box">
          <img src={jensen} />
          <h1>Sunday Dive</h1>
          <p>Enjoy our weekly Sunday Dive into one current thing happening in your life.</p>
        </div>
      </div>
      <div className="btn">
        <Link to="#" className="pricebtn">
            Sign up for free
      </Link>
      </div>
{/* <div className="inner-blog">
    <div className="header">
          <h4>JEFFAMZN NEWS</h4>
          <h3>The latest and greatest.</h3>
    </div>
    <ul className="grid">
    {campaigns.length === 0 ? (
      <li>No campaigns available yet.</li>
    ) : (
      campaigns.slice(0, 6).map((c) => (
        <li key={c.id} className="box">
          <a href={c.url} target="_blank" rel="noopener noreferrer">
            <img src="https://jeffamazn.com/GsidegWXwAECEUs.jpeg" alt="You gotta see this" />
            <h2>{c.subject}</h2>
            <p>{new Date(c.send_at).toLocaleDateString()}</p> 
          </a>
        </li>
      ))
    )}
  </ul>
</div> */}

<div className="inner-blog">
      <div className="header">
          <h4>JEFFAMZN NEWS</h4>
          <h3>The latest and greatest.</h3>
      </div>
  <ul className="grid">
    <li className="box">
      <a
        href="http://app.jeffamzn.com/campaign/ba97f2f9-a8c7-46a7-b183-ccffbc3b6891/6716369b-5785-4c74-be76-73af2558eebb"
        rel="noopener noreferrer"
      >
        <img src="https://jeffamazn.com/Screen-Shot-2025-06-03-at-5.09.08-PM.png" alt="Test Campaign Preview" />
        <h2>Test Campaign — Preview</h2>
        <p>June 29, 2025</p>
      </a>
    </li>
  </ul>
</div>
<div className="footer">
  <img src={logo} alt="Logo" />
<div className="footer-top">
  <div className="footer-signup">
    <p>Subscribe to Jeffamzn.</p>
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
    <Link to="#">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/ads/advertise-with-us">Advertise With Us</Link>
  </div>
  <div className="column">
    <h4>Support</h4>
    <a href="mailto:hey@jeffamzn.com">Contact</a>
    <a href="mailto:press@jeffamzn.com">Press</a>
    <Link to="#">Sign Up</Link>
  </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
    <Link to="/policies/privacy">Privacy Policy</Link>
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