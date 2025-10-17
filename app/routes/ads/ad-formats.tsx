import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import newads from "~/../public/img/newads.jpg";
import convertads from "~/../public/img/convertads.jpg";
import takeoverbg from "~/../public/img/takeoverbg.jpg";
import takeoverbg2 from "~/../public/img/takeoverbg2.jpg";    
    
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
  <div className="content-adformats">
    <div className="logo">
      <img src={logo} alt="Jeffamzn Logo" />
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
        <div className="content-awu5">
    <div className="header">
      <h4>GET STARTED</h4>
      <h3>Image Ads.</h3>
    </div>
    <div className="grid">
    <div className="box">
      <img src={takeoverbg2} />
      <h1>Text Ads</h1>
      <p>Send your hottest takes directly to our audience.</p>
    </div>
    </div>
    </div>
        <div className="content-awu5">
    <div className="header">
      <h4>MOVING PIXELS</h4>
      <h3>Videos Ads.</h3>
    </div>
    <div className="grid">
    <div className="box">
      <img src={takeoverbg2} />
      <h1>Text Ads</h1>
      <p>Send your hottest takes directly to our audience.</p>
    </div>
    </div>
    </div>
        <div className="content-awu5">
    <div className="header">
      <h4>MORE PIXELS</h4>
      <h3>Carousel Ads.</h3>
    </div>
    <div className="grid">
    <div className="box">
      <img src={takeoverbg2} />
      <h1>Text Ads</h1>
      <p>Send your hottest takes directly to our audience.</p>
    </div>
    </div>
    </div>
    <div className="content-awu5">
    <div className="header">
      <h4>QUICK THOUGHT</h4>
      <h3>Text Ads.</h3>
    </div>
    <div className="grid">
    <div className="box">
      <img src={takeoverbg2} />
      <h1>Text Ads</h1>
      <p>Send your hottest takes directly to our audience.</p>
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
  </div>
  );
}
   