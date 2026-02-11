import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import logo from "~/../public/img/ja2.png";
import header from "~/../public/img/ads/recads.png";
import header3 from "~/../public/img/ja7.png";
import sama from "~/../public/img/samae.jpg";
import tobi from "~/../public/img/tobic.jpg";
import jensen from "~/../public/img/jensene.jpg";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <div className="inner-content">
            <img src={header3} alt="Jeffamazon newsletter image" />
          <div className="box">
            <h1>Scroll Less. Win More.</h1>
            <p>Subscribe for your daily dose of winning 🚀</p>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Let's do it</button>
        </div>
        <Altcha />
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
          </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Win more with <span>Jeffamazon</span></h2>
        <Link className="text" to="/subscribe">Don't waste time scrolling to stay ahead. Jeffamazon is the <span>1 minute antidote that keeps 45,000+ people in the loop</span> about what matters across the world.</Link>
      </div>
      <div className="floatimg">
          <img src={sama} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Stay ahead</span></h2>
          <Link className="text" to="/subscribe">Become a decisive decision maker who stays ahead.</Link>
      </div>
      <div className="floatimg">
            <img src={tobi} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25sm">
       <h2><span>1 min or less</span></h2>
             <Link className="text" to="/subscribe">Every business news story that matters in one minute or less.</Link>
      </div>
      <div className="floatimg">
          <img src={jensen} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Always free</span></h2>
      <Link className="text" to="/subscribe">Enjoy our Sunday dig into one hot take with asymmetric upside.</Link>
      </div>
      <div className="floatimg">
          <img src={header} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
            <Link className="text" to="/subscribe">Jeffamazon is a quick and insightful daily newsletter that helps you stay ahead in business, technology, and economic trends.</Link>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <p className="noclick">Founder</p>
      <p className="noclick">Chris Signore</p>
      <div className="btn">
          <Link className="pricebtn" to="/about">About</Link>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Founder image" />
        </div>
      </div>
      <div className="inner-content2555">
          <Link className="text" to="/about">" It's the one thing that lets me know what matters.</Link>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Founder
      </p>
      </div>
      </div>
       <div className="inner-content3">
      <div className="grid">
      <div className="box">
        <h1>Subscribe</h1>
        <p>Get Jeffamazon delivered to your inbox.</p>
          <Link className="text" to="/subscribe">Subscribe →</Link>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Become an advertiser in Jeffamazon.</p>
          <Link className="text" to="/ads/ad-form">Get in touch →</Link>
      </div>
      </div>
    </div>
{/* <div className="inner-blog">
    <div className="header">
          <h4>JEFFAMAZON NEWS</h4>
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
{/* 
<div className="inner-blog">
      <div className="header">
          <h4>JEFFAMAZON NEWS</h4>
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
</div> */}
    </div>
  );
}