import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import sama from "~/../public/img/samae.jpg";
import tobi from "~/../public/img/tobic.jpg";
import jensen from "~/../public/img/jensene.jpg";

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
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>GREAT TAKES START HERE</h4>
            <h1>Stay informed in just 1 minute</h1>
            <p>Enjoy daily conversations and insights from highly informed people running some of the most powerful and influential companies across the world.</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Let's do it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
      </div>
      <div className="inner-content2">
      <h2>We're <span>the internet's</span> fave newsletter.</h2>
      <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer">
      <p>Every day of the week, Jeffamzn delivers great takes on news, trends, the economy, and everything else that actually matters to people doing business in the business world.</p>
      </a>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox daily.</h3>
            <p>Enjoy real conversations and insights from highly informed people running some of the most powerful and influential companies across the world.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={sama} />
          <h1>Quick insights</h1>
          <p>Quick insights from highly informed people.</p>
        </div>
        <div className="box">
          <img src={tobi} />
          <h1>Real stories</h1>
          <p>Real stories from influential leaders.</p>
        </div>
        <div className="box">
          <img src={jensen} />
          <h1>Deep dive threads</h1>
          <p>Enjoy two weekly deep dive threads.</p>
        </div>
      </div>
      <div className="btn">
        <a title="subscription form" href="https://app.jeffamzn.com/subscription/form"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
      </a>
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
    </div>
  );
}