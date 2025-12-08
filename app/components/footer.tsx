import { Link } from "@remix-run/react";

import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";

export default function Footer() {
  return (
<footer className="footer">

  <h1>Jeffamazon</h1>

<div className="footer-top">
  <div className="footer-signup">
    <h1>Screw it, let's do it.</h1>
          <p>Start your day with Jeffamazon</p>
    <form method="post" action="https://app.thepoast.com/subscription/form">
      <div className="input-wrapper">
        <input className="email" type="email" name="email" required placeholder="Email Address *" />
        <button className="submit" type="submit">Let's do it</button>
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
    <Link to="/about">About</Link>
    <Link to="/policies/checkmarks">Checkmarks</Link>
  </div>
  <div className="column">
    <h4>Support</h4>
    <a title="subscription form" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer">Subscribe</a>
    <Link to="/ads/advertise">Advertise</Link>
    <a title="media kit" href="https://app.thepoast.com/campaign/326965e9-08ca-45d8-8949-df43df3bdbfe/e0b14610-4448-4657-ae89-21598fe78de2"  rel="noopener noreferrer">Media Kit</a>
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
  <a href="mailto:chris@jeffamzn.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</footer>
  );
}
