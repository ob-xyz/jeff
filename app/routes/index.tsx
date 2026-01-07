import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import header2 from "~/../public/img/ja4.png";
import sama from "~/../public/img/samae.jpg";
import tobi from "~/../public/img/tobic.jpg";
import jensen from "~/../public/img/jensene.jpg";
import cs from "~/../public/img/cs.jpg";

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
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>JEFFAMAZON DAILY NEWSLETTER</h4>
            <h1>Scroll Less. Know More.</h1>
            <p>Start your day with a 1-minute dose of what matters 🚀</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Send it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Start your day with <span>Jeffamazon</span></h2>
      <a title="subscription form" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer">
      <p>Stop spending your mornings scrolling to stay informed. <span>Jeffamazon is the antidote keeping 32,000+ people in the loop</span> about what matters in the business world.</p>
      </a>
      </div>
      <div className="floatimg">
          <img src={sama} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Be decisive</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Become a decision making machine who makes smarter decisions.</p>
      </a>
      </div>
      <div className="floatimg">
            <img src={tobi} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25sm">
       <h2><span>In the loop</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Get a quick update about what matters across the business world.</p>
      </a>
      </div>
      <div className="floatimg">
          <img src={jensen} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25sm">
       <h2><span>Asymmetric upside</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Enjoy our Sunday deep dives into smart bets with asymmetric upside.</p>
      </a>
      </div>
            <div className="floatimg">
            <img src={header2} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
      <a title="jeffamazon home page" href="https://jeffamazon.com/"  rel="noopener noreferrer">
      <p>Jeffamazon is an informative and insightful 1-minute daily newsletter that helps you make smarter decisions and know more about business strategy, technology, and economic trends.</p>
      </a>
      <div className="btn">
        <a title="subscription form" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
        </a>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <p className="noclick">Founder</p>
      <p className="noclick">Chris Signore</p>
      <div className="btn">
        <a title="subscription form" href="https://thepoast.com/"  rel="noopener noreferrer" className="pricebtn">
            About
        </a>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Founder image" />
        </div>
      </div>
      <div className="inner-content2555">
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>" It's the one thing that actually lets me know what matters.</p>
      </a>
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
        <p>Want to know what matters?</p>
        <a title="subscribe today" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer">Subscribe →</a>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Want to post? We're looking for new advertisers.</p>
        <a title="get in touch" href="mailto:ads@jeffamazon.com"  rel="noopener noreferrer">Get in touch →</a>
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