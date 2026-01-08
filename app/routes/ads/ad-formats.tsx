import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";

import carouselads from "~/../public/img/ads/carouselads.gif";
import videoads from "~/../public/img/ads/videoads.gif";
import imageads from "~/../public/img/ads/imageads.png";
import textads from "~/../public/img/ads/textads.png";
import newsads from "~/../public/img/ads/quickads.png";
import takeoverads from "~/../public/img/ads/takeoverads.png";

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
    <div className="adformats-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h1>Reach 32K+ decision-makers who like knowing what matters</h1>
            <p>We're the 1-minute newsletter helping businesses do more 🚀</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
          <button className="submit" type="submit">Request Quote</button>
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
      <h2>Connect with your next customers on <span>Jeffamazon</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com"  rel="noopener noreferrer">
      <p>Our audience is highly vetted, more informed, and always looking for something new. So whether you want to use videos, images, or words, there's a Jeffamazon ad format that'll help you reach the world's most authorative audience.</p>
      </a>
      </div>
        <div className="floatimg">
            <img src={imageads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Image Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
        <p>Image ads allow you to showcase your product or service with plain jane text and a single photo.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
      <div className="floatimg">
            <img src={videoads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Video Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
        <p>Video ads are short clips that turn your offer into content people are more likely to engage in.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
     <div className="floatimg">
            <img src={carouselads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Carousel Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
        <p>Carousel ads automatically rotate up to six horizontally-shaped images to showcase multiple products.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
      <div className="floatimg">
            <img src={textads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Text Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
        <p>Text ads are the most simple and frictionless way to get your brands message across our audience.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
              <div className="floatimg">
            <img src={newsads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Mini Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
        <p>Mini ads appear above our feed, giving you an early chance to promote your product or service.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
      <div className="floatimg">
            <img src={takeoverads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Takeover Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
        <p>Takeover ads give you a widescreen image and a CTA button to maximizes your engagement.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
       <div className="inner-content3">
      <div className="grid">
      <div className="box">
        <h1>82%</h1>
        <p>Most likely to try something new</p>
      </div>
      <div className="box">
        <h1>10X</h1>
        <p>More engagement per subscriber than the average newsletter.</p>
      </div>
      <div className="box">
        <h1>5X</h1>
        <p>More likely to click Jeffamazon ads over social media ads.</p>
      </div>
      </div>
    </div>
          <div className="inner-content2555">
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>" Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.</p>
      </a>
      <div className="tag">
      <p>
        SOURCE
      </p>
      <p>
        Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone.
      </p>
      </div>
      </div>
       <div className="inner-content3sm">
      <div className="grid">
      <div className="box">
        <h1>Advertise</h1>
        <p>Want to post? We're looking for new advertisers.</p>
        <a title="get in touch" href="mailto:ads@jeffamazon.com"  rel="noopener noreferrer">Get in touch →</a>
      </div>
      <div className="box">
        <h1>Subscribe</h1>
        <p>Want to know what matters?</p>
        <a title="subscribe today" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer">Subscribe →</a>
      </div>
      </div>
    </div>
    </div>
  );
}