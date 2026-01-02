import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import newads from "~/../public/img/newads.jpg";
import convertads from "~/../public/img/convertads.jpg";
import takeoverbg from "~/../public/img/takeoverbg.jpg";

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
    <div className="ads-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h1>Reach 40K+ people in the business world</h1>
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
      <p>Our audience is authoritative, always on, and enjoys discovering something new. So whether you want to use videos, images, or words, there's a Jeffamazon ad format that'll help you do more where it matters most - the email inbox.</p>
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
      <p>Video Ads are short clips that make your products feel alive and invested to learn more through your website, app, or brand message.</p>
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
      <p>Carousel Ads automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions.</p>
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
      <p>Text Ads are the most simple and frictionless way to get your brands message across our audience.</p>
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
       <h2><span>News Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
      <p>News Ads appear in the "Today's News" section, and gives you the chance to promote your product or service.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div>
      {/* <div className="floatimg">
            <img src={takeoverads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Takeover Ads</span></h2>
      <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer">
      <p>Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement to your website or app.</p>
      </a>
      <div className="btn">
        <a title="email us" href="mailto:chris@jeffamazon.com" rel="noopener noreferrer" className="pricebtn">
            Learn more
        </a>
      </div>
      </div> */}
       <div className="inner-content3">
        <div className="text">
            <h4>INCREASE AWARENESS</h4>
            <h1>Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.</h1>
            <p>Source: Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone.</p>
        </div>
      <div className="grid">
      <div className="box">
        <h1>82%</h1>
        <p>More likely to try something new</p>
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
    <div className="btn">
    <a href="mailto:chris@jeffamazon.com" className="pricebtn">
          Start a campaign
    </a>
    </div>
    </div>
  );
}