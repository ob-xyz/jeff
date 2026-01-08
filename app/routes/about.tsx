import { useEffect } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import thepoast from "~/../public/img/thepoast.png";
import header2 from "~/../public/img/ja3.png";
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
    <div className="about-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>Hey I'm Chris Signore</h4>
            <h1>I started Jeffamazon to know what really matters in the world. And every morning I share what I know with you in a 1-minute email that's actually fun to read.</h1>
            <p>Join <span>32,000+ people</span> getting what matters across busines and technology every day of the week, along with the ocassional architectural digest gone wild, cool car pic, or just some weird looking AI robot - I'll help you know more 🚀</p>
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
            <img src={cs} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Hey I'm <span>Chris Signore</span></h2>
          <Link className="text" to="/subscribe">I'm the founder of Shilll.com, the parent company for all my ideas like Jeffamazon - my daily business newsletter reaching over 32,000 people, or The Poast - my weekly local newsletter reaching over 11,000 people.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">I'm "retired" in the sense that I'm not chasing a traditional career - instead I spend my time focusing on building products that I believe should exist in the world.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Before starting this journey I worked at ProSlide Technology for 5 years - to the day - for a guy named Rick Hunter. And as cool as his water slides were, every project started to feel the exact same to me. I got bored, read a lot of TechCrunch and thought I could do TechCrunch, but better.</Link>          
          <br /><br /><br />
          <Link className="text" to="/subscribe">I'm a proud commerce grad, but I actually like to think of myself as a desgign engineer who graduated from ProSlide University.</Link>
      </div>
      <div className="inner-content251">
          <Link className="text" to="/subscribe">My newsletters.</Link>
      </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Jeffamazon</h1>
        <p>Daily business news</p>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      </div>
            <div className="boxmat">
        <div className="floatimg">
            <img src={thepoast} alt="The Poast newsletter image" />
        </div>
      <div className="box">
        <h1>The Poast</h1>
        <p>Weekly local news</p>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
     </div>
      </div>
    </div>
      <div className="inner-content25">
          <Link className="text" to="/subscribe">" Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.</Link>
      <div className="tag">
      <p>
        SOURCE
      </p>
      <p>
        Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone.
      </p>
      </div>
      </div>
    </div>
  );
}